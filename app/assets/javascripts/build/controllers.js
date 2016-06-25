var app;

app = angular.module("controllers", []);

tvSleuth.theMovieDB = {
  apiKey: null
};

app.controller("AppController", [
  "$scope", "$location", "$timeout", function($scope, $location, $timeout) {
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
