'use strict';

angular.module('devshop')
.controller('DeveloperController', function($scope, $http){
	 
	$scope.members = [];
	

	$http.get('/script/developers_vtex.json')
	.success(function(members) {
		$scope.members = members;
		
	
		
	})
	.error(function(erro){
		console.log(erro);
	});
	 
	$scope.total = 0; 
	$scope.addtocart = function(total, idProduto, idDev) {	
	var produtoID = angular.element(document).data('id');
    console.log(produtoID);
    total += $scope.findProduto(produtoID).preco;
    
    console.log("aqui:", total);
    
    
	}

	$scope.cart = [];
	$scope.devtotal = {};
		$scope.findProduto = function(idProduto) {	
		var produtoFinal;
		 
		$http.get('/script/developers_vtex.json')
			
		.success(function(cart) {
			$scope.carts = cart;
			angular.forEach($scope.carts,function(idDev){
			
			 
			if(idDev.id == idDev.id){
            console.log(idDev.id);
            
        }
			

		});
			

			
		})
		.error(function(erro) {
			console.log(erro);
		});


		



		
		console.log(desconto);
		$scope.total = 0;
        $http.get('script/developers_vtex.json').
        success(function(data) {
            $scope.values = data;
            angular.forEach($scope.values,function(valor){
              $scope.total += valor.preco * valor.qtd;
            });
           
        }).
        error(function(data) {
            console.log("get ERROR");
        });
        
	};
	$scope.recalc = function (){
      
    	$scope.total = $scope.total - desconto;
  		
     	 
       
  };
})




	


	







