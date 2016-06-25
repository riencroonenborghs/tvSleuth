app = angular.module "controllers", []

tvSleuth.theMovieDB =
  apiKey: null

app.controller "AppController", ["$scope", "$location", "$timeout", "tvProgramService", "$mdToast",
($scope, $location, $timeout, tvProgramService, $mdToast) ->  
  $scope.theMovieDB = tvSleuth.theMovieDB
  $scope.visit = (path) ->     
    $location.path path

  loadSettings = ->    
    # load API key from Chrome local storage
    chrome.storage.local.get "tvSleuth", (data) ->      
      if data.tvSleuth
        data = JSON.parse data.tvSleuth
        tvSleuth.theMovieDB.apiKey      = data.the_movie_db.api_key
        $scope.visit "/tv_programs"
  $timeout (-> loadSettings()), 500
  $scope.$on "reload.settings", -> loadSettings()

  $scope.$on "added.tvProgram", ->
    $mdToast.show
      hideDelay: 3000
      position: "bottom right"
      templateUrl: "app/views/tv_programs/added.html"
  $scope.$on "removed.tvProgram", ->
    $mdToast.show
      hideDelay: 3000
      position: "bottom right"
      templateUrl: "app/views/tv_programs/removed.html"  

  $timeout (=>
    if tvSleuth.theMovieDB.apiKey
      $scope.visit "/tv_programs"
    else
      $scope.visit "/settings"
  ), 1000
]

app.controller "BackgroundAppController", ["$scope", "$location", "$interval", "tvProgramService", "$mdToast", "$timeout",
($scope, $location, $interval, tvProgramService, $mdToast, $timeout) ->  
  $scope.tvPrograms = []

  loadSettings = ->
    # load API key from Chrome local storage
    chrome.storage.local.get "tvSleuth", (data) ->      
      if data.tvSleuth
        data = JSON.parse data.tvSleuth
        tvSleuth.theMovieDB.apiKey = data.the_movie_db.api_key
  
  loadTVPrograms = ->
    # load saved TV programs
    chrome.storage.local.get "tvSleuth", (data) ->      
      if data.tvSleuth
        data = JSON.parse data.tvSleuth
        $scope.tvPrograms = []
        for id in (data.the_movie_db.tvPrograms || [])
          tvProgramService.get(id).then (data) ->
            $scope.tvPrograms.push data

  totalBadgeNumber  = 0
  airedTvPrograms   = ["TV Sleuth"]
  chrome.browserAction.setBadgeText {text: ""}
  chrome.browserAction.setBadgeBackgroundColor {color: [33,150,243,255]}

  airingToday = ->
    chrome.browserAction.setBadgeText {text: ""}
    airedTvPrograms   = ["TV Sleuth"]
    totalBadgeNumber  = 0
    tvProgramService.airingToday(1).then (body) ->
      checkAgainstTvPrograms body.results
      for _page in [2..body.total_pages]
        tvProgramService.airingToday(_page).then (body) ->
          checkAgainstTvPrograms body.results
      loadTVPrograms()

  checkAgainstTvPrograms = (tvProgramsAiredToday) ->
    for tvProgramAiredToday in tvProgramsAiredToday
      for tvProgram in $scope.tvPrograms
        if tvProgram.id == tvProgramAiredToday.id
          ++totalBadgeNumber
          chrome.browserAction.setBadgeText {text: totalBadgeNumber.toString()}
          if airedTvPrograms.length == 1
            airedTvPrograms.push ""
            airedTvPrograms.push "Aired today:"
          airedTvPrograms.push "- #{tvProgram.name}"
          chrome.browserAction.setTitle {title: airedTvPrograms.join("\n")}

  loadSettings()
  loadTVPrograms()
  
  $timeout airingToday, 5000

  hour = 1000 * 3600
  $interval (->
    airingToday()
  ), hour
]