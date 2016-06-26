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