var myServices = angular.module('myServices', ['elasticsearch']);

myServices.service('es', ['esFactory',
                   function (esFactory, $http) {
                     return esFactory({
                       host: 'localhost:9200',
                     });
                   }]);

                   myServices.factory('searchService', ['es',  function(es) {
                     return {
                       textSearch: function(matchInput, termFilter){

                         var querySearch = {
                           index: 'sports',
                           type: 'athlete',
                           size: 22,
                           body:{
                             query:{
                               filtered:{
                                 filter:{
                                 },
                                 query:{
                                 }
                               }
                             }
                           }
                         };

                         if (matchInput) {
                           querySearch.body.query.filtered.query.match = {name:{query: matchInput, operator: 'and'}};
                         } else {
                           querySearch.body.query.filtered.query.match_all = {};
                         }

                         if (termFilter) {
                           querySearch.body.query.filtered.filter.bool = {must:{term:{sport: termFilter}}};
                         }

                         return es.search(querySearch)
                       }
                     }
                   }]);
