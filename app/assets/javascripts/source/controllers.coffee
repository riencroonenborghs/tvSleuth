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

app.controller "BackgroundAppController", ["$scope", "$location", "tvProgramService", "$mdToast", "$timeout", "$interval",
($scope, $location, tvProgramService, $mdToast, $timeout, $interval) ->  
  $scope.tvPrograms = []

  # load API key from Chrome local storage
  chrome.storage.local.get "tvSleuth", (data) ->      
    if data.tvSleuth
      data = JSON.parse data.tvSleuth
      tvSleuth.theMovieDB.apiKey = data.the_movie_db.api_key
      # load saved tv programs
      callback = (tvPrograms) -> $scope.tvPrograms = tvPrograms
      tvProgramService.loadTVPrograms callback
  
  $timeout (-> tvProgramService.checkPrograms $scope.tvPrograms), 5000
  $interval (-> tvProgramService.checkPrograms $scope.tvPrograms), 1000 * 3600
]