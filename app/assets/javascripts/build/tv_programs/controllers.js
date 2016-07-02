var app, tvSleuth;

app = angular.module("tvPrograms.controllers", []);

tvSleuth = {
  tvPrograms: []
};

app.controller("TVProgramsIndexController", [
  "$scope", "tvProgramService", "tvSleuthAPI", "$timeout", function($scope, tvProgramService, tvSleuthAPI, $timeout) {
    var loadTVPrograms;
    $scope.tvPrograms = [];
    $scope.loading = true;
    loadTVPrograms = function() {
      var callback;
      $scope.loading = true;
      callback = function(tvPrograms) {
        $scope.tvPrograms = tvPrograms;
        tvSleuth.tvPrograms = tvPrograms;
        return $scope.loading = false;
      };
      return tvProgramService.loadTVPrograms(callback);
    };
    loadTVPrograms();
    $timeout((function() {
      return $scope.loading = false;
    }), 2500);
    $scope.airedToday = [];
    $scope.airedTodayVisible = false;
    chrome.browserAction.setBadgeBackgroundColor({
      color: [243, 33, 33, 255]
    });
    chrome.browserAction.setBadgeText({
      text: ""
    });
    tvProgramService.airedToday().then(function(airedToday) {
      $scope.airedToday = airedToday;
      if (airedToday.length > 0) {
        return chrome.browserAction.setBadgeText({
          text: "" + airedToday.length
        });
      }
    });
    $scope.$on("reload.tvPrograms", function() {
      return loadTVPrograms();
    });
    return $scope.removeFromMyList = function(tvProgram) {
      return tvSleuthAPI.removeTVProgram(tvProgram);
    };
  }
]);

app.controller("TVProgramsSearchController", [
  "$scope", "$timeout", "tvSleuthAPI", "tvMazeAPI", function($scope, $timeout, tvSleuthAPI, tvMazeAPI) {
    $scope.model = {
      query: ""
    };
    $scope.searching = false;
    $scope.service = {
      queryData: [],
      search: function() {
        this.queryData = [];
        if ($scope.model.query === "") {
          return;
        }
        $scope.searching = true;
        return tvMazeAPI.search($scope.model.query).then((function(_this) {
          return function(data) {
            var i, len, results, tvProgram;
            _this.queryData = data;
            $scope.searching = false;
            results = [];
            for (i = 0, len = data.length; i < len; i++) {
              tvProgram = data[i];
              results.push(tvProgram.inMyList = (function() {
                var item, j, len1, ref;
                ref = tvSleuth.tvPrograms;
                for (j = 0, len1 = ref.length; j < len1; j++) {
                  item = ref[j];
                  if (item.id === tvProgram.show.id) {
                    return true;
                  }
                }
                return false;
              })());
            }
            return results;
          };
        })(this));
      }
    };
    $scope.addToMyList = function(tvProgram) {
      return tvSleuthAPI.addTVProgram(tvProgram);
    };
    return $timeout((function() {
      return $("#search #query").focus();
    }), 500);
  }
]);
