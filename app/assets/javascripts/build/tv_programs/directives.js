var app;

app = angular.module("tvPrograms.directives", []);

app.directive("loadMore", [
  function() {
    return {
      restrict: "E",
      scope: {
        service: "="
      },
      templateUrl: "app/views/tv_programs/load_more.html",
      controller: [
        "$scope", function($scope) {
          return $scope.nextPage = function() {
            ++$scope.service.page;
            return $scope.service.search();
          };
        }
      ]
    };
  }
]);
