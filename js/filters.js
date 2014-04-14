angular.module('phonecatFilters', []).filter('correctRange', function() {
    return function(range) {
          return range ? '\u2713' : '\u2718';
            };
});
