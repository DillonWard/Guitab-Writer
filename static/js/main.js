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