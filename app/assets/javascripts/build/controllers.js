var app;

app = angular.module("controllers", []);

tvSleuth.theMovieDB = {
  apiKey: null
};

app.controller("AppController", [
  "$scope", "$location", "$timeout", "$mdToast", function($scope, $location, $timeout, $mdToast) {
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
  "$scope", "tvProgramService", "$timeout", "$interval", function($scope, tvProgramService, $timeout, $interval) {
    $scope.tvPrograms = [];
    return chrome.storage.local.get("tvSleuth", function(data) {
      var checkAiredTVPrograms;
      if (data.tvSleuth) {
        data = JSON.parse(data.tvSleuth);
        tvSleuth.theMovieDB.apiKey = data.the_movie_db.api_key;
        chrome.browserAction.setBadgeBackgroundColor({
          color: [33, 150, 243, 255]
        });
        chrome.browserAction.setBadgeText({
          text: ""
        });
        checkAiredTVPrograms = function() {
          console.debug("asd");
          return tvProgramService.airedToday().then(function(tvProgramsAiredToday) {
            return chrome.browserAction.setBadgeText({
              text: "" + tvProgramsAiredToday.length
            });
          });
        };
        checkAiredTVPrograms();
        return $interval((function() {
          return checkAiredTVPrograms();
        }), 1000 * 2);
      }
    });
  }
]);
