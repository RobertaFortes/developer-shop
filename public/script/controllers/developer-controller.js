

angular.module('devshop').controller('DeveloperController', function($scope, $http){
	 
	$scope.members = [];
	

	$http.get('/script/developers_vtex.js')
	.success(function(members) {
		$scope.members = members;
		
	})
	.error(function(erro){
		console.log(erro);
	});
	
	/*
	$http.get('//api.github.com/orgs/vtex');
	promise.then(function(retorno) {
		$scope.developers = retorno.data;
	}).catch(function(error) {
		console.log(error);
	});
	*/
	$scope.cart = {};

	$scope.submeter = function() {
		console.log($scope.cart);
	};
});



