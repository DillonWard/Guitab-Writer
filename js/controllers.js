angular.module('app.controllers',[])

.controller('mainCtrl', function($scope, $sce) {
  $scope.guitarImg = $sce.trustAsResourceUrl('img/guitar.png');
 
 var tab = {

    E: "E",
    A: "A",
    D: "D",
    G: "G"
    B: "B",
    e: "e"
  }  

  $scope.writeTab = function(){
    $scope.tab = tab;
  }
});