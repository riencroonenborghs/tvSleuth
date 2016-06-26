app = angular.module "tvPrograms.services", []

app.service "theMovieDBAPI", [ "$q", "$http", "$rootScope", ($q, $http, $rootScope) ->
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
        data.the_movie_db.tvPrograms ||= []
        data.the_movie_db.tvPrograms.push tvProgram.id unless tvProgram.id in data.the_movie_db.tvPrograms
        data = JSON.stringify data
        chrome.storage.local.set {tvSleuth: data}, (->
          $rootScope.$broadcast "added.tvProgram"
          $rootScope.$broadcast "reload.tvPrograms"
        )
  removeTVProgram: (tvProgram) ->
    chrome.storage.local.get "tvSleuth", (data) ->      
      if data.tvSleuth
        data = JSON.parse data.tvSleuth
        data.the_movie_db.tvPrograms ||= []
        data.the_movie_db.tvPrograms.splice(data.the_movie_db.tvPrograms.indexOf(tvProgram.id)) if tvProgram.id in data.the_movie_db.tvPrograms
        data = JSON.stringify data
        chrome.storage.local.set {tvSleuth: data}, (->
          $rootScope.$broadcast "removed.tvProgram"
          $rootScope.$broadcast "reload.tvPrograms"
        )
]

app.service "tvProgramService", [ "theMovieDBAPI", (theMovieDBAPI) ->
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
        promises    = for id in (data.the_movie_db.tvPrograms || [])
          theMovieDBAPI.get(id)
        Promise.all(promises).then (tvPrograms) =>
          tvPrograms = @sortTVPrograms tvPrograms
          callback tvPrograms if callback

  checkPrograms: (tvPrograms) ->
    totalBadgeNumber  = 0
    airedTvPrograms   = ["TV Sleuth"]
    chrome.browserAction.setBadgeText {text: ""}
    chrome.browserAction.setBadgeBackgroundColor {color: [33,150,243,255]}
  
    theMovieDBAPI.airingToday(1).then (body) =>
      checkAgainstTvPrograms body.results
      for _page in [2..body.total_pages]
        theMovieDBAPI.airingToday(_page).then (body) =>
          checkAgainstTvPrograms body.results

    checkAgainstTvPrograms = (tvProgramsAiredToday) ->
      for tvProgramAiredToday in tvProgramsAiredToday
        for tvProgram in tvPrograms
          if tvProgram.id == tvProgramAiredToday.id
            ++totalBadgeNumber
            chrome.browserAction.setBadgeText {text: totalBadgeNumber.toString()}
            if airedTvPrograms.length == 1
              airedTvPrograms.push ""
              airedTvPrograms.push "Aired today:"
            airedTvPrograms.push "- #{tvProgram.name}"
            chrome.browserAction.setTitle {title: airedTvPrograms.join("\n")}
]