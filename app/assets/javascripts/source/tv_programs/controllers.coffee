app = angular.module "tvPrograms.controllers", []

# global var to hold all programs
# mainly for search to display + button or not
tvSleuth.tvPrograms = []

app.controller "TVProgramsIndexController", ["$scope", "tvProgramService", ($scope, tvProgramService) ->  
  $scope.tvPrograms = []
  loadTVPrograms    = ->
    callback = (tvPrograms) ->
      $scope.tvPrograms   = tvPrograms
      tvSleuth.tvPrograms = tvPrograms
      tvProgramService.checkPrograms $scope.tvPrograms
    tvProgramService.loadTVPrograms callback
  loadTVPrograms()
 
  $scope.$on "reload.tvPrograms", -> loadTVPrograms()

  $scope.removeFromMyList = (tvProgram) -> tvProgramService.remove(tvProgram)
]

app.controller "TVProgramsSearchController", ["$scope", "tvProgramService", "$timeout", ($scope, tvProgramService, $timeout) ->
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

  $timeout (-> $("#search #query").focus()), 500
]