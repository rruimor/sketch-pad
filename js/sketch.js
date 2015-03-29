$(document).ready(function(){
  initSketch();
  paintOnHover();

  $(this).keydown(function( event ) {
    if ( event.which == 65 ) {
      $('.status').addClass("active");
    }
  });

  $(this).keyup(function( event ) {
    if ( event.which == 65 ) {
      $('.status').removeClass("active");
    }
  });

});

function initSketch(grid_value){
  clearSketch();
  $(".matrix").empty();
  grid_value = typeof grid_value !== 'undefined' ? grid_value : 16;

  var html = "";
  for (var i = 0; i < grid_value; i++) {
      html += '<div class="row" id="row-' + i + '"></div>';
    for (var j = 0; j < grid_value; j++) {
      html += '<div class="square"></div>';
    }
  }

  $('.matrix').append(html);

  var max_width = 960;
  var square_size = Math.floor(max_width / grid_value) - 2;

  $('.square').css("width", square_size + "px");
  $('.square').css("height", square_size + "px");

}

function resetSketch(option) {
  var grid_value = prompt("Enter the number of squares per row", "16");
  initSketch(grid_value);
  switch(option) {
    case 'trail':
      trailOnHover();
      break;
    case 'gradient':
      gradientOnHover();
      break;
    default:
      paintOnHover();
      break;
  }
}

function paintOnHover() {
  $(' .square ').mouseenter( function() {
    $(this).addClass("highlight");
    var $status = $(' .status ');
    if($status.hasClass("active")) {
      $( this ).addClass("coloured");
    }
  });

  $(' .square ').mouseleave( function() { 
    $(this).removeClass("highlight");
  }); 
}

function gradientOnHover() {
  $(' .square ').mouseenter( function() {
    $(this).addClass("highlight");

    var $status = $(' .status ');
    if($status.hasClass("active")) {
      if($(this).hasClass("gradient")){
        var colour = $(this).css('background-color');
        var rgb_pattern = /rgb\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)/
        if(rgb_pattern.test(colour)){
          alert("RGB pattern!");
        }
        console.log("Colour: " + colour);
        var index_of_opacity = colour.lastIndexOf(',') + 1;
        var current_opacity = colour.slice(index_of_opacity, -1);
        var new_opacity = parseFloat(current_opacity) + 0.1;
        var new_colour = colour.substring(0,index_of_opacity) + ' ' + new_opacity + ')';
        console.log("New Colour: " + new_colour);
        $(this).css('background-color', new_colour);  
      }
      else {
        $( this ).addClass("gradient"); 
      }
    }
  });

  $(' .square ').mouseleave( function() { 
    $(this).removeClass("highlight");
  }); 
}

function trailOnHover() {
  $('.square').hover(
    function() {
      $( this ).animate({backgroundColor: "#000"}, "fast");
  },
    function() {
      $( this ).animate({backgroundColor: "#FFF"}, "fast");
    }
  );
}

function clearSketch() {
  $('.square').removeClass("coloured");
}