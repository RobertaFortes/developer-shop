angular.module('devshop').controller('DeveloperController', function($scope, $http){

	$scope.developers = [];


	var promise = $http.get('//api.github.com/orgs/github/vtex');
	promise.then(function(retorno) {
		$scope.developers = retorno.data;
	}).catch(function(error) {
		console.log(error);
	});


	
});



