angular.module('app.controllers',[])

.controller('mainCtrl', function($scope, $sce) {
  $scope.guitarImg = $sce.trustAsResourceUrl('img/guitar.png');


 var tab = {

    E: [],
    A: [],
    D: [],
    G: [],
    B: [],
    e: []
  };
  //JSON.parse(tab);
  $scope.tab = tab;

  $scope.writeTab = function(){
   //for(var t in tab){
     tab ['E'] += "--1";
   //}
  $scope.tab = tab;

  }
});