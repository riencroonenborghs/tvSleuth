var app;

app = angular.module("settings.controllers", []);

app.controller("SettingsIndexController", [
  "$scope", "$rootScope", function($scope, $rootScope) {
    $scope.model = {
      apiKey: ""
    };
    $scope.saving = false;
    return $scope.save = function() {
      var data, hash;
      $scope.saving = true;
      hash = {
        the_movie_db: {
          api_key: $scope.model.apiKey
        }
      };
      data = JSON.stringify(hash);
      chrome.storage.local.set({
        tvSleuth: data
      });
      $rootScope.$broadcast("reload.settings");
      return $scope.saving = false;
    };
  }
]);
