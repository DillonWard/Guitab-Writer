angular.module('app.controllers',[])

.controller('mainCtrl', function($scope, $sce) {
 
// $scope.guitarImg = $sce.trustAsResourceUrl('static/img/fret.png');

// myFrets =  $sce.trustAsResourceUrl('static/img/fret.png');

$scope.fret = {source: 'static/img/fret.png'};

$scope.row = 12;
$scope.column = 6;

$scope.getNumber = function(number){
  return new Array(number)
}

 var tab = {
    E: [],
    A: [],
    D: [],
    G: [],
    B: [],
    e: []
  };

  $scope.tab = tab;

  $scope.wait = function(){
    tab ['E'] += "--";
    tab ['A'] += "--";
    tab ['D'] += "--";
    tab ['G'] += "--";
    tab ['B'] += "--";
    tab ['e'] += "--";
    $scope.tab = tab;
  }

});