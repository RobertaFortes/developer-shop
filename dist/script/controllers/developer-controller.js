

angular.module('devshop').controller('DeveloperController', function($scope, $http){

	$scope.members = [];


	$http.get('//api.github.com/orgs/vtex/members?page=2&per_page=5')
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
	
});



