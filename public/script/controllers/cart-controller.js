angular.module('devshop').controller('CartController', function($scope){

	$scope.cart = {};

	$scope.submeter = function() {
		console.log($scope.cart);
	};
});