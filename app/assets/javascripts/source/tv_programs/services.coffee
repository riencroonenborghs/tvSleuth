app = angular.module "tvPrograms.services", []

app.service "theMovieDBAPI", [ "$q", "$http", ($q, $http) ->
  apiPath: "http://api.themoviedb.org/3"
  search: (query, page = 1) -> @_sendRequest "#{@apiPath}/search/tv?api_key=#{tvSleuth.theMovieDB.apiKey}&query=#{query}&page=#{page}"
  get: (tvProgramID) -> @_sendRequest "#{@apiPath}/tv/#{tvProgramID}?api_key=#{tvSleuth.theMovieDB.apiKey}"
  airingToday: (page = 1) -> @_sendRequest "#{@apiPath}/tv/airing_today?api_key=#{tvSleuth.theMovieDB.apiKey}&page=#{page}"
  _sendRequest: (url) ->
    deferred = $q.defer()
    options = 
      method: "GET"
      url: url
      headers:
        "Accept": "application/json"
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
        data.tvPrograms ||= []
        data.tvPrograms.push tvProgram.id unless tvProgram.id in data.tvPrograms
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
        data.tvPrograms.splice(data.tvPrograms.indexOf(tvProgram.id)) if tvProgram.id in data.tvPrograms
        data = JSON.stringify data
        chrome.storage.local.set {tvSleuth: data}, (->
          $rootScope.$broadcast "removed.tvProgram"
          $rootScope.$broadcast "reload.tvPrograms"
        )
  setAiredToday: (airedToday) ->
    chrome.storage.local.get "tvSleuth", (data) ->      
      if data.tvSleuth
        data = JSON.parse data.tvSleuth
        data.airedToday = airedToday
        data = JSON.stringify data
        chrome.storage.local.set {tvSleuth: data}
]

app.service "tvProgramService", [ "theMovieDBAPI", "$q", (theMovieDBAPI, $q) ->
  sortTVPrograms: (list) ->
    list.sort (a,b) ->
        if a.original_name < b.original_name
          return -1
        if a.original_name > b.original_name
          return 1
        return 0

  loadTVPrograms: (callback) ->
    tvPrograms = []
    chrome.storage.local.get "tvSleuth", (data) =>
      if data.tvSleuth
        data        = JSON.parse data.tvSleuth
        tvPrograms  = []
        promises    = for id in (data.tvPrograms || [])
          theMovieDBAPI.get(id)
        Promise.all(promises).then (tvPrograms) =>
          tvPrograms = @sortTVPrograms tvPrograms
          callback tvPrograms if callback

  airedToday: ->
    deferred = $q.defer()
    # load saved tv programs
    @loadTVPrograms (tvPrograms) ->
      # list what's aired today
      # get first page, from that repsonse get all other pages and pool responses
      theMovieDBAPI.airingToday(1).then (firstPageResponse) =>
        airedTVPrograms     = firstPageResponse.results
        otherPagesPromises  = for _page in [2..firstPageResponse.total_pages]
          theMovieDBAPI.airingToday(_page)
        Promise.all(otherPagesPromises).then (otherPagesResponses) =>
          for response in otherPagesResponses
            airedTVPrograms = airedTVPrograms.concat response.results
          # check if saved tv program aired today
          aired = []
          for airedTVProgram in airedTVPrograms
            for tvProgram in tvPrograms
              if tvProgram.id == airedTVProgram.id
                aired.push airedTVProgram
          deferred.resolve aired
    deferred.promise
          


  # checkPrograms: (tvPrograms) ->
  #   totalBadgeNumber  = 0
  #   airedTVPrograms   = ["TV Sleuth"]
  #   chrome.browserAction.setBadgeText {text: ""}
  #   chrome.browserAction.setBadgeBackgroundColor {color: [33,150,243,255]}
  
  #   theMovieDBAPI.airingToday(1).then (body) =>
  #     checkAgainstTVPrograms body.results
  #     for _page in [2..body.total_pages]
  #       theMovieDBAPI.airingToday(_page).then (body) =>
  #         checkAgainstTVPrograms body.results

  #   checkAgainstTVPrograms = (tvProgramsAiredToday) ->
  #     for tvProgramAiredToday in tvProgramsAiredToday
  #       for tvProgram in tvPrograms
  #         if tvProgram.id == tvProgramAiredToday.id
  #           ++totalBadgeNumber
  #           chrome.browserAction.setBadgeText {text: totalBadgeNumber.toString()}
  #           if airedTVPrograms.length == 1
  #             airedTVPrograms.push ""
  #             airedTVPrograms.push "Aired today:"
  #           airedTVPrograms.push "- #{tvProgram.name}"
  #           chrome.browserAction.setTitle {title: airedTVPrograms.join("\n")}
]