app = angular.module "tvPrograms.controllers", []

# global var to hold all programs
# mainly for search to display + button or not
tvSleuth.tvPrograms = []

app.controller "TVProgramsIndexController", ["$scope", "tvProgramService", ($scope, tvProgramService) ->  
  $scope.tvPrograms = []
  loadTVPrograms = ->
    # load saved TV programs
    chrome.storage.local.get "tvSleuth", (data) ->      
      if data.tvSleuth
        data = JSON.parse data.tvSleuth
        $scope.tvPrograms = []
        for id in (data.the_movie_db.tvPrograms || [])
          tvProgramService.get(id).then (data) ->
            $scope.tvPrograms.push data
        tvSleuth.tvPrograms = $scope.tvPrograms
  loadTVPrograms()
 
  $scope.$on "reload.tvPrograms", -> loadTVPrograms()

  $scope.removeFromMyList = (tvProgram) -> tvProgramService.remove(tvProgram)
]

app.controller "TVProgramsSearchController", ["$scope", "tvProgramService", ($scope, tvProgramService) ->
  $scope.queryResults = {}

  $scope.model =
    query: ""

  $scope.search = ->
    if $scope.model.query.length == 0
      $scope.queryResults = {}
      return
    tvProgramService.search($scope.model.query).then (data) ->
      $scope.queryResults = data
      for program in $scope.queryResults.results
        program.inMyList = do =>
          for item in tvSleuth.tvPrograms
            return true if item.id == program.id
          return false

  $scope.addToMyList = (tvProgram) -> tvProgramService.add(tvProgram)
]