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

app.controller "BackgroundAppController", ["$scope", "tvProgramService", "$interval",
($scope, tvProgramService, $interval) ->  
  airingLength      = 0
  halfHourInseconds = 1800
  intervalInSeconds = 10
  counter           = (halfHourInseconds / intervalInSeconds) - 1
  
  checkAiredTVPrograms = ->
    ++counter
    r = Math.floor((Math.random() * 255) + 1)        
    chrome.browserAction.setBadgeBackgroundColor {color: [r,33,33,255]}
    chrome.browserAction.setBadgeText {text: "#{airingLength}"}

    if counter == (halfHourInseconds / intervalInSeconds)
      counter == 0
      # set colour + reset badge
      chrome.browserAction.setBadgeBackgroundColor {color: [243,33,33,255]}
      chrome.browserAction.setBadgeText {text: "#{airingLength}"}
      tvProgramService.airingToday().then (tvProgramsAiredToday) =>
        airingLength = tvProgramsAiredToday.length
        chrome.browserAction.setBadgeText {text: "#{tvProgramsAiredToday.length}"}# if tvProgramsAiredToday.length > 0
  checkAiredTVPrograms()

  $interval (-> checkAiredTVPrograms()), 1000 * intervalInSeconds
]