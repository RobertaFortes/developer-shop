
angular.module('devshop', ['developerDiretiva', 'ngRoute','cartDiretiva',])
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);
	$routeProvider.when('/',{
		templateUrl: 'partials/principal.html',
		controller: 'DeveloperController'

		
	});
	$routeProvider.when('/developers',{
		templateUrl: 'partials/principal.html',
		controller: 'DeveloperController'

		
	});
	
	$routeProvider.when('/developers/cart',{
		templateUrl: 'partials/cart.html'
		

		
	});
	$routeProvider.when('/developers/sucesso',{
		templateUrl: 'partials/sucesso.html'
		
	});


	$routeProvider.otherwise({ redirectTo: '/developers'});
});






