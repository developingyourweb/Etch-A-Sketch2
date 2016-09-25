var size = 600;

$(document).ready(function(){

  createGrid(16);

//create a new grid
function createGrid(userchoice) { 
    for(y = 0; y < userchoice; y++) {
        var row = $("<div class='row'></div>");
          for(x = 0; x < userchoice; x++) {
            var block = $("<div class='block'></div>");
               $(row).append(block);   
          }
          $("#blockbox").append(row);

          var pixelSize = (size/userchoice);

          $(".block").css("width", pixelSize);
          $(".block").css("height", pixelSize);


        $(".block").hover(function() {
          $(this).css("background-color", "pink");
        });
      }
  } 

//draw button
  $("#draw").click(function() {
    var userchoice = prompt("Please select the number of squares, 1-100");
      if(userchoice < 100) {
      $(".block").remove();
        createGrid(userchoice, userchoice);
      } else {
        userchoice;
      }
  });

//clear button 
  $('#clear').click(function() {
    $(".block").css("background-color", 'none');
  });

});