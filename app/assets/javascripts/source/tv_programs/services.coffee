app = angular.module "tvPrograms.services", []

app.service "tvProgramService", [ "$q", "$http", ($q, $http) ->
  apiPath: "http://api.themoviedb.org/3"
  search: (query) -> @_sendRequest "#{@apiPath}/search/tv?api_key=#{tvSleuth.theMovieDB.apiKey}&query=#{query}"
  _sendRequest: (url) ->
    deferred = $q.defer()
    options = 
      method: "GET"
      url: url
      headers:
        "Accept": "application/json"
    success = (response) =>
      deferred.resolve response.data
      return
    failure = (response) ->
      deferred.reject response.data
      return
    $http(options).then(success, failure)
    return deferred.promise
]