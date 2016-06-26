var app;

app = angular.module("tvPrograms.controllers", []);

tvSleuth.tvPrograms = [];

app.controller("TVProgramsIndexController", [
  "$scope", "tvProgramService", "tvSleuthAPI", function($scope, tvProgramService, tvSleuthAPI) {
    var loadTVPrograms;
    $scope.tvPrograms = [];
    loadTVPrograms = function() {
      var callback;
      callback = function(tvPrograms) {
        $scope.tvPrograms = tvPrograms;
        tvSleuth.tvPrograms = tvPrograms;
        return tvProgramService.checkPrograms($scope.tvPrograms);
      };
      return tvProgramService.loadTVPrograms(callback);
    };
    loadTVPrograms();
    $scope.$on("reload.tvPrograms", function() {
      return loadTVPrograms();
    });
    return $scope.removeFromMyList = function(tvProgram) {
      return tvSleuthAPI.removeTVProgram(tvProgram);
    };
  }
]);

app.controller("TVProgramsSearchController", [
  "$scope", "$timeout", "theMovieDBAPI", "tvSleuthAPI", function($scope, $timeout, theMovieDBAPI, tvSleuthAPI) {
    $scope.model = {
      query: ""
    };
    $scope.service = {
      page: 1,
      queryData: [],
      search: function() {
        if ($scope.model.query === "") {
          this.queryData = [];
          return;
        }
        this.page = 1;
        return theMovieDBAPI.search($scope.model.query, this.page).then((function(_this) {
          return function(data) {
            var i, len, program, ref;
            ref = data.results;
            for (i = 0, len = ref.length; i < len; i++) {
              program = ref[i];
              program.inMyList = (function() {
                var item, j, len1, ref1;
                ref1 = tvSleuth.tvPrograms;
                for (j = 0, len1 = ref1.length; j < len1; j++) {
                  item = ref1[j];
                  if (item.id === program.id) {
                    return true;
                  }
                }
                return false;
              })();
            }
            return _this.queryData = data;
          };
        })(this));
      },
      searchNext: function() {
        ++this.page;
        return theMovieDBAPI.search($scope.model.query, this.page).then((function(_this) {
          return function(data) {
            var i, len, program, ref;
            ref = data.results;
            for (i = 0, len = ref.length; i < len; i++) {
              program = ref[i];
              program.inMyList = (function() {
                var item, j, len1, ref1;
                ref1 = tvSleuth.tvPrograms;
                for (j = 0, len1 = ref1.length; j < len1; j++) {
                  item = ref1[j];
                  if (item.id === program.id) {
                    return true;
                  }
                }
                return false;
              })();
            }
            return _this.queryData.results = _this.queryData.results.concat(data.results);
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
