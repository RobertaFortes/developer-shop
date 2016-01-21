'use strict';

angular.module('developerDiretiva', [])
.directive('devDisponivel', function(){

	var ddo = {};

	ddo.restrict = "AE";
	
	ddo.scope = {
		login: '@login'
	};

	ddo.transclude = true;

	ddo.template = 

		'<h2 class="devtitle">{{login}}</h2>'
      +	'<div ng-transclude></div>'

    
	return ddo;
});

angular.module('cartDiretiva', [])
.directive('cartDisponivel', function(){

	var ddo = {};

	ddo.restrict = "AE";
	
	ddo.scope = {
		id: '@id',
		
	};

	ddo.transclude = true;

	ddo.template = 

		'<h2 class="devid">{{id}}</h2>'
      +	'<div ng-transclude></div>'

    
	return ddo;
})

