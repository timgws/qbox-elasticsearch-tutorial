var myServices = angular.module('myServices', ['elasticsearch']);

myServices.service('es', ['esFactory',
                   function (esFactory, $http) {
                     return esFactory({
                       host: 'localhost:9200',
                     });
                   }]);

                   myServices.factory('searchService', ['es',  function(es) {
                     return {
                       textSearch: function(matchInput, sportFilter, ageFilterTo, ageFilterFrom){

                         var querySearch = {
                             index: 'sports',
                             type: 'athlete',
                             size: 22,
                             body:{}
                           };



                         if (matchInput) {
                           querySearch.body.query = {match:{_all:{query: matchInput, operator: 'and'}}};
                         } else {
                           querySearch.body.query = {match_all:{}};
                         }

                         if (sportFilter){
                           querySearch.body.query = {filtered:{filter:{bool:{must:{term:{sport: sportFilter}}}}}};
                           querySearch.body.query.filtered.query = {match_all:{}};
                         }

                         if (ageFilterFrom){
                           querySearch.body.query = {filtered:{filter:{bool:{must:{range:{birthdate:{gte: ageFilterFrom.key_as_string}}}}}}};
                           querySearch.body.query.filtered.query = {match_all:{}};
                         }
                         
                         if (ageFilterTo){
                           querySearch.body.query = {filtered:{filter:{bool:{must:{range:{birthdate:{lte: ageFilterTo}}}}}}};
                           querySearch.body.query.filtered.query = {match_all:{}};
                         }

                         if (ageFilterTo && ageFilterFrom){
                           querySearch.body.query = {filtered:{filter:{bool:{must:{range:{birthdate:{gte: ageFilterFrom.key_as_string, lte: ageFilterTo.key_as_string}}}}}}};
                           querySearch.body.query.filtered.query = {match_all:{}};
                         }

                         if (sportFilter && matchInput) {
                           querySearch.body.query = {filtered:{filter:{bool:{must:{term:{sport: sportFilter}}}}}};
                           querySearch.body.query.filtered.query = {match:{_all:{query: matchInput, operator: 'and'}}};
                         }

                         return es.search(querySearch);
                       },

                       aggSearch: function(matchInput){

                         var sportsAgg = {
                             index: 'sports',
                             type: 'athlete',
                             size: 20,
                             body:{
                               aggs:{
                                 sport:{
                                   terms:{field: 'sport'}
                                 },
                                 age:{
                                   date_histogram:{
                                     field: 'birthdate',
                                     post_offset: '24m',
                                     interval: 'year',
                                     format: 'YYYY-MM-dd'
                                   }
                                 }
                               }
                             }
                         };

                         if (matchInput) {
                           sportsAgg.body.query = {match:{_all:{query: matchInput, operator: 'and'}}};
                         } else {
                           sportsAgg.body.query = {match_all:{}};
                         }

                         return es.search(sportsAgg);
                       }
                     }
                   }]);
