angular.module('app').controller('mainCtrl', function($scope, mainSvc, firebaseRoot, $firebaseArray){

  var emailRef = new Firebase(firebaseRoot + '/email')
  $scope.emails = $firebaseArray(emailRef);
  $scope.addEmail = function(email){
    $scope.emails.$add(email);
  }


  $scope.productList = mainSvc.getProducts();
  $scope.modalShown = false;
  $scope.toggleModal = function(pro){
    $scope.modalShown = !$scope.modalShown;
    $scope.pro = pro;
  };



});
