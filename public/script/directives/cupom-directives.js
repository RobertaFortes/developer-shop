
angular.module('cupomDiretiva', [])
.directive('cupomDisponivel', function(){
  desconto = 0;

  var validElement = angular.element('<div>{{ total }}</div>');

  var link = function (scope) {
    scope.$watch("model.input", function (value) {
      if(value === "SHIPIT") {
        desconto = 10;
         
       
        console.log(desconto);
       
      }
    });
  };

  

  return {
    restrict: "E",
    replace: true,
    templateUrl: "partials/cupom.html",
    compile: function (tElem) {
      tElem.append(validElement);

      return link;
    }
  }
});