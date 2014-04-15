var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController', ['$scope', 'es','searchService',
                               function($scope, es, searchService) {
                                 $scope.search = function() {

                                   var hits = searchService.textSearch($scope.search.matchInput, $scope.search.termFilter);

                                   hits.then(function(resp) {
                                     $scope.results = resp.hits.hits;
                                     $scope.sports = ['Baseball', 'Football','Hockey','Basketball', 'Golf']
                                   });
                                 };

                                 angular.element(document).ready(function () {
                                   $scope.search();
                                 });
                               }]);
