angular.module('app.controllers',[])

.controller('mainCtrl', function($scope, $sce) {
  $scope.guitarImg = $sce.trustAsResourceUrl('img/guitar.png');

});
  var tab = "";

$(document).ready(function(){
  $("#add").click(function(){
      tab += "--1";
      $('#txtarea').html(tab);
  });
});