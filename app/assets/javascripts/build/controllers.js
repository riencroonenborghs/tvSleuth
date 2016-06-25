var app;

app = angular.module("controllers", []);

tvSleuth.theMovieDB = {
  apiKey: null
};

app.controller("AppController", [
  "$scope", "$location", "$timeout", "tvProgramService", "$mdToast", function($scope, $location, $timeout, tvProgramService, $mdToast) {
    var loadSettings;
    $scope.theMovieDB = tvSleuth.theMovieDB;
    $scope.visit = function(path) {
      return $location.path(path);
    };
    loadSettings = function() {
      return chrome.storage.local.get("tvSleuth", function(data) {
        if (data.tvSleuth) {
          data = JSON.parse(data.tvSleuth);
          tvSleuth.theMovieDB.apiKey = data.the_movie_db.api_key;
          return $scope.visit("/tv_programs");
        }
      });
    };
    $timeout((function() {
      return loadSettings();
    }), 500);
    $scope.$on("reload.settings", function() {
      return loadSettings();
    });
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
    return $timeout(((function(_this) {
      return function() {
        if (tvSleuth.theMovieDB.apiKey) {
          return $scope.visit("/tv_programs");
        } else {
          return $scope.visit("/settings");
        }
      };
    })(this)), 1000);
  }
]);

app.controller("BackgroundAppController", [
  "$scope", "$location", "tvProgramService", "$mdToast", "$timeout", function($scope, $location, tvProgramService, $mdToast, $timeout) {
    $scope.tvPrograms = [];
    chrome.storage.local.get("tvSleuth", function(data) {
      var callback;
      if (data.tvSleuth) {
        data = JSON.parse(data.tvSleuth);
        tvSleuth.theMovieDB.apiKey = data.the_movie_db.api_key;
        callback = function(tvPrograms) {
          return $scope.tvPrograms = tvPrograms;
        };
        return tvProgramService.loadTVPrograms(callback);
      }
    });
    return $timeout((function() {
      return tvProgramService.checkPrograms($scope.tvPrograms);
    }), 5000);
  }
]);
