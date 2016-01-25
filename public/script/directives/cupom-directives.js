
angular.module('cupomDiretiva', [])
.directive('cupomDisponivel', function(){
  desconto = 0;

  

  var link = function (scope) {
    scope.$watch("model.input", function (bla) {
      if(bla === "SHIPIT") {
        desconto = 149;
         
       
        console.log(desconto);
       
      }
    });
  };



  return {
    restrict: "E",
    replace: true,
    templateUrl: "partials/cupom.html",
    compile: function (tElem) {
     

      return link;
     

    }
  }
});