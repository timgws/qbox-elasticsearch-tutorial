var myServices = angular.module('myServices', ['elasticsearch']);

myServices.service('es', ['esFactory',
  function (esFactory, $http) {
    return esFactory({
      host: 'localhost:9200',
  });
}]);

myServices.factory('searchService', ['es', function(es) {
  return {
    textSearch: function(query){
      return es.search({
        index: 'disney',
        type: 'character',
        q: query
      })
    }
  };
}]);
