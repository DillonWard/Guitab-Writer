angular.module('app.controllers',[])

.controller('mainCtrl', function($scope, $sce) {
  $scope.guitarImg = $sce.trustAsResourceUrl('img/guitar.png');
  var tab = "";


  wow = function(){
  	tab += "--1";
  	  $scope.tab = tab;

  }

  $scope.wow = wow;
});