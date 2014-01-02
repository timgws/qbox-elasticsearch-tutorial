var myControllers = angular.module('myControllers', []);

			myControllers.controller('SearchController', ['$scope', 'es','searchService',
        function($scope, es, searchService) {
         $scope.search = function() {
           var hits = searchService.textSearch($scope.query || '*');
           hits.then(function(resp) {
             $scope.results = resp.hits.hits;
           });
         };

        angular.element(document).ready(function () {
          $scope.search();
        });
			}]);



