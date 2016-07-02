var app;

app = angular.module("controllers", []);

app.controller("AppController", [
  "$scope", "$location", "$timeout", "$mdToast", function($scope, $location, $timeout, $mdToast) {
    $scope.visit = function(path) {
      return $location.path(path);
    };
    $scope.$on("added.tvProgram", function() {
      return $mdToast.show({
        hideDelay: 3000,
        position: "bottom right",
        templateUrl: "app/views/tv_programs/added.html"
      });
    });
    $scope.$on("removed.tvProgram", function() {
      return $mdToast.show({
        hideDelay: 3000,
        position: "bottom right",
        templateUrl: "app/views/tv_programs/removed.html"
      });
    });
    return $scope.visit("/tv_programs");
  }
]);

app.controller("BackgroundAppController", [
  "$scope", "tvProgramService", "$timeout", "$interval", function($scope, tvProgramService, $timeout, $interval) {
    return $scope.tvPrograms = [];
  }
]);
