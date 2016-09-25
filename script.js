
//$(document).ready(function() {
  //  var userchoice = prompt("Please select a number between 1-10");
//});
//var x = 0;



$(document).ready(function(){
$("#draw").click(function(){
    var userchoice = prompt("Please select a number between 1-100");
      for(y = 0; y < userchoice; y++) {
          var row = $("<div class='row'></div>");
          for(x = 0; x < userchoice; x++) {
            var block = $("<div class='block'></div>");
               $(row).append(block);   
          }
          $("#blockbox").append(row);
      }
        });
});
