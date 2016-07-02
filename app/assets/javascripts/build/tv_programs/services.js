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

app.service("tvMazeAPI", [
  "$q", "$http", function($q, $http) {
    return {
      apiPath: "http://api.tvmaze.com",
      search: function(query) {
        return this._sendRequest(this.apiPath + "/search/shows?q=" + query);
      },
      shows: function(id) {
        return this._sendRequest(this.apiPath + "/shows/" + id);
      },
      schedule: function(date) {
        var day, isoDateString, month;
        month = date.getMonth() + 1;
        day = date.getDate();
        isoDateString = [date.getFullYear()];
        isoDateString.push(month < 10 ? "0" + month : month);
        isoDateString.push(day < 10 ? "0" + day : day);
        return this._sendRequest(this.apiPath + "/schedule?date=" + (isoDateString.join("-")));
      },
      scheduleToday: function() {
        return this.schedule(new Date());
      },
      _sendRequest: function(url) {
        var deferred, failure, options, success;
        deferred = $q.defer();
        options = {
          method: "GET",
          url: url
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
            if (ref = tvProgram.show.id, indexOf.call(data.tvPrograms, ref) < 0) {
              data.tvPrograms.push(tvProgram.show.id);
            }
          } else {
            data = {
              tvPrograms: [tvProgram.show.id]
            };
          }
          data = JSON.stringify(data);
          return chrome.storage.local.set({
            tvSleuth: data
          }, (function() {
            $rootScope.$broadcast("added.tvProgram");
            return $rootScope.$broadcast("reload.tvPrograms");
          }));
        });
      },
      removeTVProgram: function(tvProgram) {
        return chrome.storage.local.get("tvSleuth", function(data) {
          var ref;
          if (data.tvSleuth) {
            data = JSON.parse(data.tvSleuth);
            data.tvPrograms || (data.tvPrograms = []);
            if (ref = tvProgram.show.id, indexOf.call(data.tvPrograms, ref) >= 0) {
              data.tvPrograms.splice(data.tvPrograms.indexOf(tvProgram.show.id));
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
  "theMovieDBAPI", "tvMazeAPI", "$q", function(theMovieDBAPI, tvMazeAPI, $q) {
    return {
      sortTVPrograms: function(list) {
        return list.sort(function(a, b) {
          if (a.show.name < b.show.name) {
            return -1;
          }
          if (a.show.name > b.show.name) {
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
                  results.push(tvMazeAPI.shows(id));
                }
                return results;
              })();
              return Promise.all(promises).then(function(tvPrograms) {
                var tvProgram;
                tvPrograms = (function() {
                  var i, len, results;
                  results = [];
                  for (i = 0, len = tvPrograms.length; i < len; i++) {
                    tvProgram = tvPrograms[i];
                    results.push({
                      show: tvProgram
                    });
                  }
                  return results;
                })();
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
          return tvMazeAPI.scheduleToday().then((function(_this) {
            return function(airedTVPrograms) {
              var aired, airedTVProgram, i, j, len, len1, tvProgram;
              aired = [];
              for (i = 0, len = airedTVPrograms.length; i < len; i++) {
                airedTVProgram = airedTVPrograms[i];
                for (j = 0, len1 = tvPrograms.length; j < len1; j++) {
                  tvProgram = tvPrograms[j];
                  if (tvProgram.show.id === airedTVProgram.show.id) {
                    aired.push(airedTVProgram);
                  }
                }
              }
              return deferred.resolve(aired);
            };
          })(this));
        });
        return deferred.promise;
      }
    };
  }
]);
