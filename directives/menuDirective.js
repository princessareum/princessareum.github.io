angular.module('app').directive('menuDirective', function(){
  return {
    restrict: 'E',
    // scope: {
    //   show: '='
    // },
    replace: true,
    transclude: true,
    // link: function(scope, element, attrs) {
      // scope.hideModal = function(){
      //   scope.show = false;
      // };
    // },
    templateUrl: 'directives/menuDirective.html'


    }

})
