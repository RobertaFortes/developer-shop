angular.module('devshop', ['developerDiretiva', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);
	$routeProvider.when('/developers',{
		templateUrl: 'partials/principal.html',
		controller: 'DeveloperController'
	});


	$routeProvider.otherwise({ redirectTo: '/developers'});
});






