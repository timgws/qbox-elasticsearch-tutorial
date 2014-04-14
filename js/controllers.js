var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController', ['$scope', 'es','searchService',
                         function($scope, es, searchService) {
                           $scope.search = function() {

                             var hits = searchService.textSearch($scope.search.matchInput, $scope.search.sportFilter, $scope.search.ageFilterTo, $scope.search.ageFilterFrom );
                             var aggs = searchService.aggSearch($scope.search.matchInput, $scope.search.ageFilterFrom);


                             hits.then(function(resp) {
                               $scope.results = resp.hits.hits;
                             });
                             aggs.then(function(resp) {
                               $scope.sport = resp.aggregations.sport.buckets;
                               $scope.age = resp.aggregations.age.buckets;
                             });
                           };

                           $scope.search.ageFilterFrom = {key: 567995040000};
                           $scope.search.ageFilterTo = {key: 1388535840000};

                           angular.element(document).ready(function () {
                             $scope.search();
                           });

                         }]);
