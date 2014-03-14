var myControllers = angular.module('myControllers', []);

			myControllers.controller('SearchController', ['$scope', 'es','searchService',
        function($scope, es, searchService) {
         $scope.search = function() {
           var hits = searchService.textSearch($scope.input);
           hits.then(function(resp) {
             $scope.results = resp.hits.hits;
             $scope.sports = resp.aggregations.sports.buckets;
           });
         };

        angular.element(document).ready(function () {
          $scope.search();
        });
			}]);



