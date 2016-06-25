var app, tvSleuth;

tvSleuth = window.tvSleuth || (window.tvSleuth = {});

app = angular.module("tvSleuth", ["ngAria", "ngAnimate", "ngMaterial", "ngMdIcons", "ngRoute", "controllers", "settings.controllers", "tvPrograms.controllers", "tvPrograms.services"]);

app.config(function($mdThemingProvider) {
  return $mdThemingProvider.theme("default").primaryPalette("blue").accentPalette("green");
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when("/settings", {
    templateUrl: "app/views/settings/index.html",
    controller: "SettingsIndexController"
  }).when("/tv_programs", {
    templateUrl: "app/views/tv_programs/index.html",
    controller: "TVProgramsIndexController"
  }).when("/tv_programs/search", {
    templateUrl: "app/views/tv_programs/search.html",
    controller: "TVProgramsSearchController"
  });
  return $locationProvider.html5Mode(true);
});
