app = angular.module "tvPrograms.filters", []

app.filter "stripHTML", [->
  (input) -> input.replace(/<\/?[^>]+>/gi, '')
]