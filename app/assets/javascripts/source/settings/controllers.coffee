app = angular.module "settings.controllers", []

app.controller "SettingsIndexController", ["$scope", "$rootScope", ($scope, $rootScope) ->  
  $scope.model =
    apiKey: ""
  $scope.saving = false

  $scope.save = ->
    $scope.saving = true
    hash =
      the_movie_db: 
        api_key: $scope.model.apiKey
    data = JSON.stringify hash
    chrome.storage.local.set {tvSleuth: data}
    $rootScope.$broadcast "reload.settings"
    $scope.saving = false
]