var app,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

app = angular.module("tvPrograms.services", []);

app.service("theMovieDBAPI", [
  "$q", "$http", function($q, $http) {
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
          var ref;
          if (data.tvSleuth) {
            data = JSON.parse(data.tvSleuth);
            data.tvPrograms || (data.tvPrograms = []);
            if (ref = tvProgram.id, indexOf.call(data.tvPrograms, ref) < 0) {
              data.tvPrograms.push(tvProgram.id);
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
          var ref;
          if (data.tvSleuth) {
            data = JSON.parse(data.tvSleuth);
            data.tvPrograms || (data.tvPrograms = []);
            if (ref = tvProgram.id, indexOf.call(data.tvPrograms, ref) >= 0) {
              data.tvPrograms.splice(data.tvPrograms.indexOf(tvProgram.id));
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
      setAiredToday: function(airedToday) {
        return chrome.storage.local.get("tvSleuth", function(data) {
          if (data.tvSleuth) {
            data = JSON.parse(data.tvSleuth);
            data.airedToday = airedToday;
            data = JSON.stringify(data);
            return chrome.storage.local.set({
              tvSleuth: data
            });
          }
        });
      }
    };
  }
]);

app.service("tvProgramService", [
  "theMovieDBAPI", "$q", function(theMovieDBAPI, $q) {
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
                ref = data.tvPrograms || [];
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
      airedToday: function() {
        var deferred;
        deferred = $q.defer();
        this.loadTVPrograms(function(tvPrograms) {
          return theMovieDBAPI.airingToday(1).then((function(_this) {
            return function(firstPageResponse) {
              var _page, airedTVPrograms, otherPagesPromises;
              airedTVPrograms = firstPageResponse.results;
              otherPagesPromises = (function() {
                var i, ref, results;
                results = [];
                for (_page = i = 2, ref = firstPageResponse.total_pages; 2 <= ref ? i <= ref : i >= ref; _page = 2 <= ref ? ++i : --i) {
                  results.push(theMovieDBAPI.airingToday(_page));
                }
                return results;
              })();
              return Promise.all(otherPagesPromises).then(function(otherPagesResponses) {
                var aired, airedTVProgram, i, j, k, len, len1, len2, response, tvProgram;
                for (i = 0, len = otherPagesResponses.length; i < len; i++) {
                  response = otherPagesResponses[i];
                  airedTVPrograms = airedTVPrograms.concat(response.results);
                }
                aired = [];
                for (j = 0, len1 = airedTVPrograms.length; j < len1; j++) {
                  airedTVProgram = airedTVPrograms[j];
                  for (k = 0, len2 = tvPrograms.length; k < len2; k++) {
                    tvProgram = tvPrograms[k];
                    if (tvProgram.id === airedTVProgram.id) {
                      aired.push(airedTVProgram);
                    }
                  }
                }
                return deferred.resolve(aired);
              });
            };
          })(this));
        });
        return deferred.promise;
      }
    };
  }
]);
