app = angular.module "tvPrograms.controllers", []

# global var to hold all programs
# mainly for search to display + button or not
tvSleuth.tvPrograms = []

app.controller "TVProgramsIndexController", ["$scope", "tvProgramService", "theMovieDBAPI", 
($scope, tvProgramService, theMovieDBAPI) ->
  $scope.tvPrograms = []
  loadTVPrograms    = ->
    callback = (tvPrograms) ->
      $scope.tvPrograms   = tvPrograms
      tvSleuth.tvPrograms = tvPrograms
      tvProgramService.checkPrograms $scope.tvPrograms
    tvProgramService.loadTVPrograms callback
  loadTVPrograms()
 
  $scope.$on "reload.tvPrograms", -> loadTVPrograms()

  $scope.removeFromMyList = (tvProgram) -> theMovieDBAPI.remove(tvProgram)
]

app.controller "TVProgramsSearchController", ["$scope", "$timeout", "theMovieDBAPI",
($scope, $timeout, theMovieDBAPI) ->
  # $scope.queryResults = {}

  $scope.model =
    query: ""

  $scope.service =
    page: 1
    queryData: []
    search: ->
      @page = 1
      theMovieDBAPI.search($scope.model.query, @page).then (data) =>
        # lookup if programs in data are in my list of programs
        for program in data.results
          program.inMyList = do =>
            for item in tvSleuth.tvPrograms
              return true if item.id == program.id
            return false
        @queryData = data
    searchNext: ->
      ++@page
      theMovieDBAPI.search($scope.model.query, @page).then (data) =>
        # lookup if programs in data are in my list of programs
        for program in data.results
          program.inMyList = do =>
            for item in tvSleuth.tvPrograms
              return true if item.id == program.id
            return false
        # set full data when on first page, otherwise just concat the actual results
        @queryData.results = @queryData.results.concat data.results
  
  $scope.addToMyList = (tvProgram) -> theMovieDBAPI.add(tvProgram)

  $timeout (-> $("#search #query").focus()), 500
]