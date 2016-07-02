app = angular.module "controllers", []

app.controller "AppController", ["$scope", "$location", "$timeout", "$mdToast",
($scope, $location, $timeout, $mdToast) ->  
  $scope.visit = (path) -> $location.path path

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

  $scope.visit "/tv_programs"
]

app.controller "BackgroundAppController", ["$scope", "tvProgramService", "$timeout", "$interval",
($scope, tvProgramService, $timeout, $interval) ->  
  $scope.tvPrograms = []

  # # load API key from Chrome local storage
  # chrome.storage.local.get "tvSleuth", (data) ->
  #   if data.tvSleuth
  #     data = JSON.parse data.tvSleuth
  #     tvSleuth.theMovieDB.apiKey    = data.the_movie_db.api_key

  #     counter           = 0
  #     airedLength       = 0
  #     halfHourInseconds = 1800
  #     intervalInSeconds = 10
  #     checkAiredTVPrograms = ->
  #       ++counter
  #       r = Math.floor((Math.random() * 255) + 1)        
  #       chrome.browserAction.setBadgeBackgroundColor {color: [r,33,33,255]}
  #       chrome.browserAction.setBadgeText {text: "#{airedLength}"}

  #       if counter == (halfHourInseconds/intervalInSeconds)
  #         counter == 0
  #         # set colour + reset badge
  #         chrome.browserAction.setBadgeBackgroundColor {color: [243,33,33,255]}
  #         chrome.browserAction.setBadgeText {text: "#{airedLength}"}
  #         tvProgramService.airedToday().then (tvProgramsAiredToday) =>
  #           airedLength = tvProgramsAiredToday.length
  #           tvProgramsAiredTodayPrevious = tvProgramsAiredToday
  #           chrome.browserAction.setBadgeText {text: "#{tvProgramsAiredToday.length}"} if tvProgramsAiredToday.length > 0
  #     checkAiredTVPrograms()

  #     $interval (-> checkAiredTVPrograms()), 1000 * intervalInSeconds
]