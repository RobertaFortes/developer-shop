angular.module('devshop', [
    'ngStorage'
]).controller('Ctrl', function(
    $scope,
        $localStorage, $http
      ){
        $scope.$storage = $localStorage.$default({
          x: 42
        });
      });

