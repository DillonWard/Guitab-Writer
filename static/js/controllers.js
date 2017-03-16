angular.module('app.controllers',[])

.controller('mainCtrl', function($scope, $sce) {

 var tab = {
    E: [],
    A: [],
    D: [],
    G: [],
    B: [],
    e: []
  };

$scope.fret = {source: 'static/img/fret.png'};
$scope.row = 12;
$scope.column = 6;


$scope.writeTab = function(row, column){
  $scope.test = row + " "  + column;
  console.log($scope.test)
}

$scope.getNumber = function(number){
  return new Array(number)
}
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