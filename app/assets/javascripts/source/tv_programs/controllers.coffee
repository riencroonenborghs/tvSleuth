app = angular.module "tvPrograms.controllers", []

app.controller "TVProgramsIndexController", ["$scope", "$rootScope", ($scope, $rootScope) ->  
  $scope.tvPrograms = []
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
]