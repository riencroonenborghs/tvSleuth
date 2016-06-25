var app;

app = angular.module("tvPrograms.controllers", []);

app.controller("TVProgramsIndexController", [
  "$scope", "$rootScope", function($scope, $rootScope) {
    return $scope.tvPrograms = [];
  }
]);

app.controller("TVProgramsSearchController", [
  "$scope", "tvProgramService", function($scope, tvProgramService) {
    $scope.queryResults = {};
    $scope.model = {
      query: ""
    };
    return $scope.search = function() {
      if ($scope.model.query.length === 0) {
        $scope.queryResults = {};
        return;
      }
      return tvProgramService.search($scope.model.query).then(function(data) {
        return $scope.queryResults = data;
      });
    };
  }
]);
