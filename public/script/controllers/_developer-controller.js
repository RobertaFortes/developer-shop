'use strict';

angular.module('devshop')
.controller('DeveloperController', function($scope, $http){
	 
	$scope.members = [];
	

	$http.get('/script/developers_vtex.json')
	.success(function(members) {
		$scope.members = members;

		$scope.cart = [];

		$scope.addtocart = function() {	

		$http.get('/script/developers_vtex.json')
		.success(function(cart) {
			$scope.cart = cart;
		})
		.error(function(erro) {
			console.log(erro);
		});
	};
		
	})
	.error(function(erro){
		console.log(erro);
	});
})




	


	







