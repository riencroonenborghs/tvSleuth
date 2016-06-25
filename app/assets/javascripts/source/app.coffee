# http://kodi.wiki/view/JSON-RPC_API/v6

tvSleuth = window.tvSleuth ||= {}

app = angular.module "tvSleuth", [
  "ngAria",
  "ngAnimate",
  "ngMaterial",
  "ngMdIcons",
  "ngRoute",
  "controllers",
  "settings.controllers",
  "tvPrograms.controllers",
  "tvPrograms.services"
]

app.config ($mdThemingProvider) ->
  $mdThemingProvider.theme("default")
    .primaryPalette("blue")
    .accentPalette("green")

app.config ($routeProvider, $locationProvider) ->
  $routeProvider
    .when "/settings",
      templateUrl: "app/views/settings/index.html"
      controller: "SettingsIndexController"
    .when "/tv_programs",
      templateUrl: "app/views/tv_programs/index.html"
      controller: "TVProgramsIndexController"
    .when "/tv_programs/search",
      templateUrl: "app/views/tv_programs/search.html"
      controller: "TVProgramsSearchController"
  $locationProvider.html5Mode true