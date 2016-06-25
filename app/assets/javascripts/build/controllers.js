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
  "$scope", "$location", "$interval", "tvProgramService", "$mdToast", "$timeout", function($scope, $location, $interval, tvProgramService, $mdToast, $timeout) {
    var airedTvPrograms, airingToday, checkAgainstTvPrograms, hour, loadSettings, loadTVPrograms, totalBadgeNumber;
    $scope.tvPrograms = [];
    loadSettings = function() {
      return chrome.storage.local.get("tvSleuth", function(data) {
        if (data.tvSleuth) {
          data = JSON.parse(data.tvSleuth);
          return tvSleuth.theMovieDB.apiKey = data.the_movie_db.api_key;
        }
      });
    };
    loadTVPrograms = function() {
      return chrome.storage.local.get("tvSleuth", function(data) {
        var i, id, len, ref, results;
        if (data.tvSleuth) {
          data = JSON.parse(data.tvSleuth);
          $scope.tvPrograms = [];
          ref = data.the_movie_db.tvPrograms || [];
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            id = ref[i];
            results.push(tvProgramService.get(id).then(function(data) {
              return $scope.tvPrograms.push(data);
            }));
          }
          return results;
        }
      });
    };
    totalBadgeNumber = 0;
    airedTvPrograms = ["TV Sleuth"];
    chrome.browserAction.setBadgeText({
      text: ""
    });
    chrome.browserAction.setBadgeBackgroundColor({
      color: [33, 150, 243, 255]
    });
    airingToday = function() {
      chrome.browserAction.setBadgeText({
        text: ""
      });
      airedTvPrograms = ["TV Sleuth"];
      totalBadgeNumber = 0;
      return tvProgramService.airingToday(1).then(function(body) {
        var _page, i, ref;
        checkAgainstTvPrograms(body.results);
        for (_page = i = 2, ref = body.total_pages; 2 <= ref ? i <= ref : i >= ref; _page = 2 <= ref ? ++i : --i) {
          tvProgramService.airingToday(_page).then(function(body) {
            return checkAgainstTvPrograms(body.results);
          });
        }
        return loadTVPrograms();
      });
    };
    checkAgainstTvPrograms = function(tvProgramsAiredToday) {
      var i, len, results, tvProgram, tvProgramAiredToday;
      results = [];
      for (i = 0, len = tvProgramsAiredToday.length; i < len; i++) {
        tvProgramAiredToday = tvProgramsAiredToday[i];
        results.push((function() {
          var j, len1, ref, results1;
          ref = $scope.tvPrograms;
          results1 = [];
          for (j = 0, len1 = ref.length; j < len1; j++) {
            tvProgram = ref[j];
            if (tvProgram.id === tvProgramAiredToday.id) {
              ++totalBadgeNumber;
              chrome.browserAction.setBadgeText({
                text: totalBadgeNumber.toString()
              });
              if (airedTvPrograms.length === 1) {
                airedTvPrograms.push("");
                airedTvPrograms.push("Aired today:");
              }
              airedTvPrograms.push("- " + tvProgram.name);
              results1.push(chrome.browserAction.setTitle({
                title: airedTvPrograms.join("\n")
              }));
            } else {
              results1.push(void 0);
            }
          }
          return results1;
        })());
      }
      return results;
    };
    loadSettings();
    loadTVPrograms();
    $timeout(airingToday, 5000);
    hour = 1000 * 3600;
    return $interval((function() {
      return airingToday();
    }), hour);
  }
]);
