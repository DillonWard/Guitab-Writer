angular.module('app.controllers',[])

.controller('mainCtrl', function($scope, $sce) {
  $scope.guitarImg = $sce.trustAsResourceUrl('static/img/guitar.png');


 var tab = {
    E: [],
    A: [],
    D: [],
    G: [],
    B: [],
    e: []
  };

  $scope.tab = tab;

  $scope.writeTab = function(){
    tab ['E'] += "--1";
    $scope.tab = tab;
  }
});