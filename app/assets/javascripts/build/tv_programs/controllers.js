var app;

app = angular.module("tvPrograms.controllers", []);

tvSleuth.tvPrograms = [];

app.controller("TVProgramsIndexController", [
  "$scope", "tvProgramService", function($scope, tvProgramService) {
    var loadTVPrograms;
    $scope.tvPrograms = [];
    loadTVPrograms = function() {
      return chrome.storage.local.get("tvSleuth", function(data) {
        var i, id, len, ref;
        if (data.tvSleuth) {
          data = JSON.parse(data.tvSleuth);
          $scope.tvPrograms = [];
          ref = data.the_movie_db.tvPrograms || [];
          for (i = 0, len = ref.length; i < len; i++) {
            id = ref[i];
            tvProgramService.get(id).then(function(data) {
              return $scope.tvPrograms.push(data);
            });
          }
          return tvSleuth.tvPrograms = $scope.tvPrograms;
        }
      });
    };
    loadTVPrograms();
    $scope.$on("reload.tvPrograms", function() {
      return loadTVPrograms();
    });
    return $scope.removeFromMyList = function(tvProgram) {
      return tvProgramService.remove(tvProgram);
    };
  }
]);

app.controller("TVProgramsSearchController", [
  "$scope", "tvProgramService", function($scope, tvProgramService) {
    $scope.queryResults = {};
    $scope.model = {
      query: ""
    };
    $scope.search = function() {
      if ($scope.model.query.length === 0) {
        $scope.queryResults = {};
        return;
      }
      return tvProgramService.search($scope.model.query).then(function(data) {
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
    return $scope.addToMyList = function(tvProgram) {
      return tvProgramService.add(tvProgram);
    };
  }
]);
