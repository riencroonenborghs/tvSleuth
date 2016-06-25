var app;

app = angular.module("tvPrograms.controllers", []);

tvSleuth.tvPrograms = [];

app.controller("TVProgramsIndexController", [
  "$scope", "tvProgramService", "theMovieDBAPI", function($scope, tvProgramService, theMovieDBAPI) {
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
      return theMovieDBAPI.remove(tvProgram);
    };
  }
]);

app.controller("TVProgramsSearchController", [
  "$scope", "$timeout", "theMovieDBAPI", function($scope, $timeout, theMovieDBAPI) {
    $scope.queryResults = {};
    $scope.model = {
      query: ""
    };
    $scope.search = function() {
      if ($scope.model.query.length === 0) {
        $scope.queryResults = {};
        return;
      }
      return theMovieDBAPI.search($scope.model.query).then(function(data) {
        var i, len, program, ref, results;
        $scope.queryResults = data;
        ref = $scope.queryResults.results;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          program = ref[i];
          results.push(program.inMyList = (function(_this) {
            return function() {
              var item, j, len1, ref1;
              ref1 = tvSleuth.tvPrograms;
              for (j = 0, len1 = ref1.length; j < len1; j++) {
                item = ref1[j];
                if (item.id === program.id) {
                  return true;
                }
              }
              return false;
            };
          })(this)());
        }
        return results;
      });
    };
    $scope.addToMyList = function(tvProgram) {
      return theMovieDBAPI.add(tvProgram);
    };
    return $timeout((function() {
      return $("#search #query").focus();
    }), 500);
  }
]);
