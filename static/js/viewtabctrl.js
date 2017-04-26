angular.module('app')

.controller('viewtabCtrl', function($scope, $location, $routeParams) {

  var loadTab = function(){
    $.ajax({
          type: 'GET',
          async: false,
          url: '/api/tabs/' + $routeParams.id,
          dataType: "json",
          contentType: "application/json",
          success: function(response){
              console.log(response);
              $scope.body =response.tabBody;
          }
      });
  }
  loadTab();

});