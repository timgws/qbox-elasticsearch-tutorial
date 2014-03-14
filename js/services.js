var myServices = angular.module('myServices', ['elasticsearch']);

myServices.service('es', ['esFactory',
  function (esFactory, $http) {
    return esFactory({
      host: 'localhost:9200',
  });
}]);

myServices.factory('searchService', ['es',  function(es) {
  return {
    textSearch: function(input){
      if (typeof input === 'string')
        {
          return es.search({
            index: 'sports',
            type: 'athlete',
            body: {
              query: {
                match:{
                  name: input,
                }
              },
              aggregations: {
                sports: {
                  terms: {
                    field: 'sport'
                  }
                }
              }
            }
          })
        }
        if (typeof input != 'string' || input == "" )
          {
          return es.search({
            index: 'sports',
            type: 'athlete',
            body: {
              query: {
                match_all:{}
              },
              aggregations: {
                sports: {
                  terms: {
                    field: 'sport'
                  }
                }
              }
            }
          })
        }
    }
  };
}]);
