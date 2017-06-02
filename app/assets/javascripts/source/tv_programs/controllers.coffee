app = angular.module "tvPrograms.controllers", []

# global var to hold all programs
# mainly for search to display + button or not
tvSleuth =
  tvPrograms: []

app.controller "TVProgramsIndexController", ["$scope", "tvProgramService", "tvSleuthAPI", "$timeout",
($scope, tvProgramService, tvSleuthAPI, $timeout) ->
  $scope.tvPrograms = []
  $scope.loading    = true

  loadTVPrograms    = ->
    $scope.loading    = true
    callback = (tvPrograms) ->
      $scope.tvPrograms   = tvPrograms
      tvSleuth.tvPrograms = tvPrograms
      $scope.loading      = false
    tvProgramService.loadTVPrograms callback
  loadTVPrograms()
  
  # stop showing loading screen in case callback isn't reached
  $timeout (->
    $scope.loading = false
  ), 2500

  $scope.airingToday    = []
  $scope.airedYesterday = []
  chrome.browserAction.setBadgeBackgroundColor {color: [243,33,33,255]}
  chrome.browserAction.setBadgeText {text: ""}
  tvProgramService.airingToday().then (airingToday) ->
    $scope.airingToday = airingToday
    chrome.browserAction.setBadgeText {text: "#{airingToday.length}"} if airingToday.length > 0
  tvProgramService.airedYesterday().then (airedYesterday) ->
    $scope.airedYesterday = airedYesterday
 
  $scope.$on "reload.tvPrograms", -> loadTVPrograms()

  $scope.removeFromMyList = (tvProgram) -> tvSleuthAPI.removeTVProgram(tvProgram)
]

app.controller "TVProgramsSearchController", ["$scope", "$timeout", "tvSleuthAPI", "tvMazeAPI",
($scope, $timeout, tvSleuthAPI, tvMazeAPI) ->
  $scope.model =
    query: ""
  $scope.searching = false

  $scope.service =
    queryData: []
    search: ->      
      @queryData = []
      return if $scope.model.query == ""
      $scope.searching = true
      tvMazeAPI.search($scope.model.query).then (data) =>
        @queryData = data
        $scope.searching = false
        # lookup if programs in data are in my list of programs
        for tvProgram in data
          tvProgram.inMyList = do =>
            for item in tvSleuth.tvPrograms
              return true if item.id == tvProgram.show.id
            return false  

  $scope.addToMyList = (tvProgram) -> tvSleuthAPI.addTVProgram(tvProgram)

  $timeout (-> $("#search #query").focus()), 500
]