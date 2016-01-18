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