app = angular.module "tvPrograms.directives", []

app.directive "loadMore", [->
  restrict: "E"
  scope:
    service: "="
  templateUrl: "app/views/tv_programs/load_more.html"
  controller: ["$scope", ($scope) ->
    $scope.nextPage = ->
      $scope.service.searchNext()
  ]
]

app.directive "tvProgramsList", [->
  restrict: "E"
  scope:
    tvPrograms: "="
    showEpisode: "=?"
    canRemove: "=?"
    onRemove: "&?"
    canAdd: "=?"
    onAdd: "&?"
  templateUrl: "app/views/tv_programs/list.html"
  controller: ["$scope", ($scope)->
    $scope.showEpisode  ||= false
    $scope.add            = (tvProgram) -> $scope.onAdd $tvProgram: tvProgram
    $scope.remove         = (tvProgram) -> $scope.onRemove $tvProgram: tvProgram
  ]
]