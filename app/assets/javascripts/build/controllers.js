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
  "$scope", "tvProgramService", "$interval", function($scope, tvProgramService, $interval) {
    var airingLength, checkAiringTVPrograms, counter, halfHourInseconds, intervalInSeconds;
    airingLength = 0;
    halfHourInseconds = 1800;
    intervalInSeconds = 10;
    counter = (halfHourInseconds / intervalInSeconds) - 1;
    checkAiringTVPrograms = function() {
      var r;
      ++counter;
      r = Math.floor((Math.random() * 255) + 1);
      chrome.browserAction.setBadgeBackgroundColor({
        color: [r, 33, 33, 255]
      });
      chrome.browserAction.setBadgeText({
        text: "" + airingLength
      });
      if (counter === (halfHourInseconds / intervalInSeconds)) {
        counter === 0;
        chrome.browserAction.setBadgeBackgroundColor({
          color: [243, 33, 33, 255]
        });
        chrome.browserAction.setBadgeText({
          text: "" + airingLength
        });
        return tvProgramService.airingToday().then((function(_this) {
          return function(tvProgramsAiringToday) {
            airingLength = tvProgramsAiringToday.length;
            return chrome.browserAction.setBadgeText({
              text: "" + tvProgramsAiringToday.length
            });
          };
        })(this));
      }
    };
    checkAiringTVPrograms();
    return $interval((function() {
      return checkAiringTVPrograms();
    }), 1000 * intervalInSeconds);
  }
]);
