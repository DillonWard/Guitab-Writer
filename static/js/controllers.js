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

  $scope.writeTab = function(row, column){
    // if statements for adding the column that are pressed to the text area
    if(row === 0){
      tab ['E'] += "--" + column + "--";
      tab ['A'] += "-----";
      tab ['D'] += "-----";
      tab ['G'] += "-----";
      tab ['B'] += "-----";
      tab ['e'] += "-----";
    }

    else if(row === 1 && column < 9){
      tab ['E'] += "-----";
      tab ['A'] += "--" + column + "--";
      tab ['D'] += "-----";
      tab ['G'] += "-----";
      tab ['B'] += "-----";
      tab ['e'] += "-----";
    }

    else if (row === 2 && column < 9){
      tab ['E'] += "-----";
      tab ['A'] += "-----";
      tab ['D'] += "--" + column + "--";
      tab ['G'] += "-----";
      tab ['B'] += "-----";
      tab ['e'] += "-----";
    }

    else if(row === 3 && column < 9){
      tab ['E'] += "-----";
      tab ['A'] += "-----";
      tab ['D'] += "-----";
      tab ['G'] +="--" + column + "--";
      tab ['B'] += "-----";
      tab ['e'] += "-----";
    }

    else if(row === 4 && column < 9){
      tab ['E'] += "-----";
      tab ['A'] += "-----";
      tab ['D'] += "-----";
      tab ['G'] += "-----";
      tab ['B'] += "--" + column + "--";
      tab ['e'] += "-----";
    }

    else if(row === 5 && column < 9){
      tab ['E'] += "-----";
      tab ['A'] += "-----";
      tab ['D'] += "-----";
      tab ['G'] += "-----";
      tab ['B'] += "-----";
      tab ['e'] += "--" + column + "--";
    }
    
    // Frets that are above 9 need an extra dash because they're 1 character longer

    else if(row === 0 && column > 9){
      tab ['E'] += "--" + column + "--";
      tab ['A'] += "------";
      tab ['D'] += "------";
      tab ['G'] += "------";
      tab ['B'] += "------";
      tab ['e'] += "------";
    }

  else if(row === 1 && column > 9){
      tab ['E'] += "------";
      tab ['A'] += "--" + column + "--";
      tab ['D'] += "------";
      tab ['G'] += "------";
      tab ['B'] += "------";
      tab ['e'] += "------";
    }

    else if(row === 2 && column > 9){
      tab ['E'] += "------";
      tab ['A'] += "------";
      tab ['D'] += "--" + column + "--";
      tab ['G'] += "------";
      tab ['B'] += "------";
      tab ['e'] += "------";
    }

  else if(row === 3 && column > 9){
      tab ['E'] += "------";
      tab ['A'] += "------";
      tab ['D'] += "------";
      tab ['G'] += "--" + column + "--";
      tab ['B'] += "------";
      tab ['e'] += "------";
    }
  else if(row === 4 && column > 9){
      tab ['E'] += "------";
      tab ['A'] += "------";
      tab ['D'] += "------";
      tab ['G'] += "------";
      tab ['B'] += "--" + column + "--";
      tab ['e'] += "------";
    }
  else if(row === 5 && column > 9){
      tab ['E'] += "------";
      tab ['A'] += "------";
      tab ['D'] += "------";
      tab ['G'] += "------";
      tab ['B'] += "------";
      tab ['e'] += "--" + column + "--";
    }
    
    $scope.noteLog = row + "/"  + column;
    console.log($scope.noteLog)
    // makes the tab visible
    $scope.tab = tab;
  }

  // retuns the numbers from the index/index parent
  $scope.getNumber = function(number){
    return new Array(number)
    console.log($scope.number)
  }

  
  $scope.clear = function(){
      tab['E'] = "";
      tab['A'] = "";
      tab['D'] = "";
      tab['G'] = "";
      tab['B'] = "";
      tab['e'] = "";
    }


  // adds a dash instead of a note for waiting
  $scope.wait = function(){
    tab ['E'] += "--";
    tab ['A'] += "--";
    tab ['D'] += "--";
    tab ['G'] += "--";
    tab ['B'] += "--";
    tab ['e'] += "--";
    $scope.tab = tab;
  }

  
  var newTab = {
    name: null,
    tabBody: null
  } 

  $("#savetab").click(function(e){
              
      e.preventDefault();
            
      newTab.name = $('#name').val();    
      newTab.tabBody = $('#tabBody').val();
      
          $.ajax({
              type: 'POST',
              url:'/api/tabs',
              data: JSON.stringify(newTab),
              dataType: "json",
              contentType: "application/json",
              success: function(response){
                  console.log("POSTED " + response);
              } // makes an ajax call to post them to the server
          });
  });


  $scope.viewTabs = function(){
  $.ajax({
          type: 'GET',
          async: false,
          url: '/api/tabs',
          dataType: "json",
          contentType: "application/json",
          success: function(response){
              $scope.viewTab = response;
          }
      });

  }
});