var myControllers = angular.module('myControllers', []);

			myControllers.controller('SearchController', ['$scope', 'es','searchService',
        function($scope, es, searchService) {
         var query = "ducktales" 
         var hits = searchService.textSearch(query);
         hits.then(function(resp) {
          $scope.results = resp.body.hits;
         });
			}]);



