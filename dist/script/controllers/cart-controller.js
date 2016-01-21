angular.module('devshop').controller('CartController', function($scope, $http){

	$scope.cart = {};

	$scope.submeter = function() {

		$http.get('/script/developers_vtex.json', $scope.cart)
		.success(function() {
			console.log('produto ok')
		})
		.error(function(erro) {
			console.log(erro);
		});
	};
});

