app = angular.module "controllers", []

tvSleuth.theMovieDB =
  apiKey: null

app.controller "AppController", ["$scope", "$location", "$timeout", ($scope, $location, $timeout) ->  
  $scope.theMovieDB = tvSleuth.theMovieDB
  $scope.visit = (path) ->     
    $location.path path

  loadSettings = ->    
    # check if we have a API key for The Movie theMovieDB
    chrome.storage.local.get "tvSleuth", (data) ->      
      if data.tvSleuth        
        data = JSON.parse data.tvSleuth
        tvSleuth.theMovieDB.apiKey = data.the_movie_db.api_key        
        $scope.visit "/tv_programs"        
  $timeout (-> loadSettings()), 500
  $scope.$on "reload.settings", -> loadSettings()

  $timeout (=>
    if tvSleuth.theMovieDB.apiKey
      $scope.visit "/tv_programs"
    else
      $scope.visit "/settings"
  ), 1000
]