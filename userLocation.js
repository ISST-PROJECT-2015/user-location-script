$(document).ready(function() {
 
             
            //make the AJAX request, dataType is set to json
            //meaning we are expecting JSON data in response from the server
            $.ajax({
                type: "POST",
                url: "http://www.localizacion2-isst-2015.appspot.com/prueba2",
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'jsonpCallback',
                 
                //if received a response from the server
                success: function( data, textStatus, jqXHR) {
                    //our country code was correct so we have some information to display
                     if(data.success){
                         $("#ajaxResponse").html("");
                         $("#ajaxResponse").append("IVA a aplicar: " + data.countryInfo.name);
                     } 
                     //display error message
                     else {
                         $("#ajaxResponse").html("error");
                     }
                },
                 
                //If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                      $("#ajaxResponse").html(jqXHR.responseText);
                },
                 
                
     
            });         
     
    function jsonpCallback(data) {
        console.log("callback",data);
        //do nothing    
    }
 
});