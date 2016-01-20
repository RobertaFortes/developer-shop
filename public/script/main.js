angular.module('devshop', ['developerDiretiva', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);
	$routeProvider.when('/developers',{
		templateUrl: 'partials/principal.html',
		controller: 'DeveloperController'

		
	});
	$routeProvider.when('/developers/cart',{
		templateUrl: 'partials/cart.html',
		controller: 'CartController'

		
	});
	$routeProvider.when('/developers/sucesso',{
		templateUrl: '/sucesso.html'
		
	});

	$routeProvider.otherwise({ redirectTo: '/developers'});
});






