app = angular.module "tvPrograms.services", []

# http://www.tvmaze.com/api
app.service "tvMazeAPI", [ "$q", "$http", ($q, $http) ->
  apiPath: "http://api.tvmaze.com"
  search: (query) -> @_sendRequest "#{@apiPath}/search/shows?q=#{query}"
  shows: (id) -> @_sendRequest "#{@apiPath}/shows/#{id}"
  schedule: (date) -> 
    month         = date.getMonth()+1
    day           = date.getDate()
    isoDateString = [date.getFullYear()]
    isoDateString.push(if month < 10 then "0#{month}" else month)
    isoDateString.push(if day < 10 then "0#{day}" else day)
    @_sendRequest "#{@apiPath}/schedule?date=#{isoDateString.join("-")}"
  scheduleToday: -> @schedule(new Date())
  _sendRequest: (url) ->
    deferred = $q.defer()
    options = 
      method: "GET"
      url: url
      # headers:
      #   "Accept": "application/json"
    success = (response) =>
      deferred.resolve response.data
      return
    failure = (response) ->
      deferred.reject response.data
      return
    $http(options).then(success, failure)
    return deferred.promise
]

app.service "tvSleuthAPI", [ "$rootScope", ($rootScope) ->
  addTVProgram: (tvProgram) ->
    chrome.storage.local.get "tvSleuth", (data) ->
      if data.tvSleuth
        data = JSON.parse data.tvSleuth
        data.tvPrograms.push tvProgram.show.id unless tvProgram.show.id in data.tvPrograms
      else
        data = 
          tvPrograms: [tvProgram.show.id]
      data = JSON.stringify data
      chrome.storage.local.set {tvSleuth: data}, (->
        $rootScope.$broadcast "added.tvProgram"
        $rootScope.$broadcast "reload.tvPrograms"
      )
  removeTVProgram: (tvProgram) ->
    chrome.storage.local.get "tvSleuth", (data) ->      
      if data.tvSleuth
        data = JSON.parse data.tvSleuth
        data.tvPrograms ||= []
        data.tvPrograms.splice(data.tvPrograms.indexOf(tvProgram.show.id)) if tvProgram.show.id in data.tvPrograms
        data = JSON.stringify data
        chrome.storage.local.set {tvSleuth: data}, (->
          $rootScope.$broadcast "removed.tvProgram"
          $rootScope.$broadcast "reload.tvPrograms"
        )
]

app.service "tvProgramService", [ "tvMazeAPI", "$q", (tvMazeAPI, $q) ->
  sortTVPrograms: (list) ->
    list.sort (a,b) ->
        if a.show.name < b.show.name
          return -1
        if a.show.name > b.show.name
          return 1
        return 0

  loadTVPrograms: (callback) ->
    tvPrograms = []
    chrome.storage.local.get "tvSleuth", (data) =>
      if data.tvSleuth
        data        = JSON.parse data.tvSleuth
        tvPrograms  = []
        promises    = for id in (data.tvPrograms || [])
          tvMazeAPI.shows(id)
        Promise.all(promises).then (tvPrograms) =>
          # puts all tvPrograms into {show: ...} hash
          # for tvProgramsList to work
          # (search uses same hash structure)
          tvPrograms = for tvProgram in tvPrograms
            {show: tvProgram}
          tvPrograms = @sortTVPrograms tvPrograms
          callback tvPrograms if callback

  airedToday: ->
    deferred = $q.defer()
    # load saved tv programs
    @loadTVPrograms (tvPrograms) ->
      tvMazeAPI.scheduleToday().then (airedTVPrograms) =>
        # check if saved tv program aired today
        aired = []
        for airedTVProgram in airedTVPrograms
          for tvProgram in tvPrograms
            if tvProgram.show.id == airedTVProgram.show.id
              aired.push airedTVProgram
        deferred.resolve aired

    deferred.promise
]