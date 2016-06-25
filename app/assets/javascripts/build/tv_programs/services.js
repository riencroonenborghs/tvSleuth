var app,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

app = angular.module("tvPrograms.services", []);

app.service("tvProgramService", [
  "$q", "$http", "$rootScope", function($q, $http, $rootScope) {
    return {
      apiPath: "http://api.themoviedb.org/3",
      search: function(query) {
        return this._sendRequest(this.apiPath + "/search/tv?api_key=" + tvSleuth.theMovieDB.apiKey + "&query=" + query);
      },
      get: function(tvProgramID) {
        return this._sendRequest(this.apiPath + "/tv/" + tvProgramID + "?api_key=" + tvSleuth.theMovieDB.apiKey);
      },
      add: function(tvProgram) {
        return chrome.storage.local.get("tvSleuth", function(data) {
          var base, ref;
          if (data.tvSleuth) {
            data = JSON.parse(data.tvSleuth);
            (base = data.the_movie_db).tvPrograms || (base.tvPrograms = []);
            if (ref = tvProgram.id, indexOf.call(data.the_movie_db.tvPrograms, ref) < 0) {
              data.the_movie_db.tvPrograms.push(tvProgram.id);
            }
            data = JSON.stringify(data);
            return chrome.storage.local.set({
              tvSleuth: data
            }, (function() {
              $rootScope.$broadcast("added.tvProgram");
              return $rootScope.$broadcast("reload.tvPrograms");
            }));
          }
        });
      },
      remove: function(tvProgram) {
        return chrome.storage.local.get("tvSleuth", function(data) {
          var base, ref;
          if (data.tvSleuth) {
            data = JSON.parse(data.tvSleuth);
            (base = data.the_movie_db).tvPrograms || (base.tvPrograms = []);
            if (ref = tvProgram.id, indexOf.call(data.the_movie_db.tvPrograms, ref) >= 0) {
              data.the_movie_db.tvPrograms.splice(data.the_movie_db.tvPrograms.indexOf(tvProgram.id));
            }
            data = JSON.stringify(data);
            return chrome.storage.local.set({
              tvSleuth: data
            }, (function() {
              $rootScope.$broadcast("removed.tvProgram");
              return $rootScope.$broadcast("reload.tvPrograms");
            }));
          }
        });
      },
      airingToday: function(page) {
        if (page == null) {
          page = 1;
        }
        return this._sendRequest(this.apiPath + "/tv/airing_today?api_key=" + tvSleuth.theMovieDB.apiKey + "&page=" + page);
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
