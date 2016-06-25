var app;

app = angular.module("tvPrograms.services", []);

app.service("tvProgramService", [
  "$q", "$http", function($q, $http) {
    return {
      apiPath: "http://api.themoviedb.org/3",
      search: function(query) {
        return this._sendRequest(this.apiPath + "/search/tv?api_key=" + tvSleuth.theMovieDB.apiKey + "&query=" + query);
      },
      _sendRequest: function(url) {
        var deferred, failure, options, success;
        deferred = $q.defer();
        options = {
          method: "GET",
          url: url,
          headers: {
            "Accept": "application/json"
          }
        };
        success = (function(_this) {
          return function(response) {
            deferred.resolve(response.data);
          };
        })(this);
        failure = function(response) {
          deferred.reject(response.data);
        };
        $http(options).then(success, failure);
        return deferred.promise;
      }
    };
  }
]);
