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
  "tvPrograms.directives",
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

#     .when "/tvshows",
#       templateUrl: "app/views/tvshows/index.html"
#       controller: "TvShowsController"
#     .when "/tvshows/genres",
#       templateUrl: "app/views/genres/index.html"
#       controller: "TvShowGenresController"
#     .when "/tvshows/rating",
#       templateUrl: "app/views/tvshows/rating.html"
#       controller: "TvShowsRatingController"
#     .when "/tvshows/:id/seasons",
#       templateUrl: "app/views/tvshows/seasons/index.html"
#       controller: "SeasonsController"
#     .when "/tvshows/:tvshowid/seasons/:id/episodes",
#       templateUrl: "app/views/tvshows/seasons/episodes/index.html"
#       controller: "EpisodesController"
#     .when "/episodes/recently-added",
#       templateUrl: "app/views/tvshows/seasons/episodes/recently-added.html"
#       controller: "RecentlyAddedEpisodesController"
#     .when "/episodes/:id",
#       templateUrl: "app/views/tvshows/seasons/episodes/show.html"
#       controller: "EpisodeController"

#     .when "/movies",
#       templateUrl: "app/views/movies/index.html"
#       controller: "MoviesController"
#     .when "/movies/genres",
#       templateUrl: "app/views/genres/index.html"
#       controller: "MovieGenresController"
#     .when "/movies/rating",
#       templateUrl: "app/views/movies/rating.html"
#       controller: "MoviesRatingController"
#     .when "/movies/recently-added",
#       templateUrl: "app/views/movies/recently-added.html"
#       controller: "RecentlyAddedMoviesController"
#     .when "/movies/years",
#       templateUrl: "app/views/movies/years/index.html"
#       controller: "MovieYearsController"
#     .when "/movies/years/:year",
#       templateUrl: "app/views/movies/years/show.html"
#       controller: "MovieYearController"
#     .when "/movies/:id",
#       templateUrl: "app/views/movies/show.html"
#       controller: "MovieController"

#     .when "/remote",
#       templateUrl: "app/views/remote/index.html"
#       controller: "RemoteController"

#     .when "/music/artists",
#       templateUrl: "app/views/music/artists.html"
#       controller: "ArtistsController"
#     .when "/music/albums",
#       templateUrl: "app/views/music/albums/index.html"
#       controller: "AlbumsController"
#     .when "/music/albums/:id",
#       templateUrl: "app/views/music/albums/show.html"
#       controller: "AlbumController"
#     .when "/music/genres",
#       templateUrl: "app/views/genres/index.html"
#       controller: "MusicGenresController"
#     .when "/music/rating",
#       templateUrl: "app/views/music/rating.html"
#       controller: "MusicRatingController"

#     .when "/genres/tvshows/:genre",
#       templateUrl: "app/views/genres/show-tvshows.html"
#       controller: "TvShowGenreController"
#     .when "/genres/movies/:genre",
#       templateUrl: "app/views/genres/show-movies.html"
#       controller: "MovieGenreController"

#     .when "/liked",
#       templateUrl: "app/views/liked/index.html"
#       controller: "LikedController"

#     .otherwise "/tvshows",
#       templateUrl: "app/views/tvshows/index.html"
#       controller: "TvShowsController"

