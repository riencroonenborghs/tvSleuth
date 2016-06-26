var app,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

app = angular.module("tvPrograms.services", []);

app.service("theMovieDBAPI", [
  "$q", "$http", "$rootScope", function($q, $http, $rootScope) {
    return {
      apiPath: "http://api.themoviedb.org/3",
      search: function(query, page) {
        if (page == null) {
          page = 1;
        }
        return this._sendRequest(this.apiPath + "/search/tv?api_key=" + tvSleuth.theMovieDB.apiKey + "&query=" + query + "&page=" + page);
      },
      get: function(tvProgramID) {
        return this._sendRequest(this.apiPath + "/tv/" + tvProgramID + "?api_key=" + tvSleuth.theMovieDB.apiKey);
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

app.service("tvSleuthAPI", [
  "$rootScope", function($rootScope) {
    return {
      addTVProgram: function(tvProgram) {
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
      removeTVProgram: function(tvProgram) {
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
      }
    };
  }
]);

app.service("tvProgramService", [
  "theMovieDBAPI", function(theMovieDBAPI) {
    return {
      sortTVPrograms: function(list) {
        return list.sort(function(a, b) {
          if (a.original_name < b.original_name) {
            return -1;
          }
          if (a.original_name > b.original_name) {
            return 1;
          }
          return 0;
        });
      },
      loadTVPrograms: function(callback) {
        var tvPrograms;
        tvPrograms = [];
        return chrome.storage.local.get("tvSleuth", (function(_this) {
          return function(data) {
            var id, promises;
            if (data.tvSleuth) {
              data = JSON.parse(data.tvSleuth);
              tvPrograms = [];
              promises = (function() {
                var i, len, ref, results;
                ref = data.the_movie_db.tvPrograms || [];
                results = [];
                for (i = 0, len = ref.length; i < len; i++) {
                  id = ref[i];
                  results.push(theMovieDBAPI.get(id));
                }
                return results;
              })();
              return Promise.all(promises).then(function(tvPrograms) {
                tvPrograms = _this.sortTVPrograms(tvPrograms);
                if (callback) {
                  return callback(tvPrograms);
                }
              });
            }
          };
        })(this));
      },
      checkPrograms: function(tvPrograms) {
        var airedTvPrograms, checkAgainstTvPrograms, totalBadgeNumber;
        totalBadgeNumber = 0;
        airedTvPrograms = ["TV Sleuth"];
        chrome.browserAction.setBadgeText({
          text: ""
        });
        chrome.browserAction.setBadgeBackgroundColor({
          color: [33, 150, 243, 255]
        });
        theMovieDBAPI.airingToday(1).then((function(_this) {
          return function(body) {
            var _page, i, ref, results;
            checkAgainstTvPrograms(body.results);
            results = [];
            for (_page = i = 2, ref = body.total_pages; 2 <= ref ? i <= ref : i >= ref; _page = 2 <= ref ? ++i : --i) {
              results.push(theMovieDBAPI.airingToday(_page).then(function(body) {
                return checkAgainstTvPrograms(body.results);
              }));
            }
            return results;
          };
        })(this));
        return checkAgainstTvPrograms = function(tvProgramsAiredToday) {
          var i, len, results, tvProgram, tvProgramAiredToday;
          results = [];
          for (i = 0, len = tvProgramsAiredToday.length; i < len; i++) {
            tvProgramAiredToday = tvProgramsAiredToday[i];
            results.push((function() {
              var j, len1, results1;
              results1 = [];
              for (j = 0, len1 = tvPrograms.length; j < len1; j++) {
                tvProgram = tvPrograms[j];
                if (tvProgram.id === tvProgramAiredToday.id) {
                  ++totalBadgeNumber;
                  chrome.browserAction.setBadgeText({
                    text: totalBadgeNumber.toString()
                  });
                  if (airedTvPrograms.length === 1) {
                    airedTvPrograms.push("");
                    airedTvPrograms.push("Aired today:");
                  }
                  airedTvPrograms.push("- " + tvProgram.name);
                  results1.push(chrome.browserAction.setTitle({
                    title: airedTvPrograms.join("\n")
                  }));
                } else {
                  results1.push(void 0);
                }
              }
              return results1;
            })());
          }
          return results;
        };
      }
    };
  }
]);
