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
            return $scope.service.searchNext();
          };
        }
      ]
    };
  }
]);

app.directive("tvProgramsList", [
  function() {
    return {
      restrict: "E",
      scope: {
        tvPrograms: "=",
        showEpisode: "=?",
        canRemove: "=?",
        onRemove: "&?",
        canAdd: "=?",
        onAdd: "&?"
      },
      templateUrl: "app/views/tv_programs/list.html",
      controller: [
        "$scope", function($scope) {
          $scope.showEpisode || ($scope.showEpisode = false);
          $scope.add = function(tvProgram) {
            return $scope.onAdd({
              $tvProgram: tvProgram
            });
          };
          return $scope.remove = function(tvProgram) {
            return $scope.onRemove({
              $tvProgram: tvProgram
            });
          };
        }
      ]
    };
  }
]);
