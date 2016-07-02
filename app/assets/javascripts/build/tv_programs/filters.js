var app;

app = angular.module("tvPrograms.filters", []);

app.filter("stripHTML", [
  function() {
    return function(input) {
      return input.replace(/<\/?[^>]+>/gi, '');
    };
  }
]);
