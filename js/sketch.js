$(document).ready(function(){
  alert("Debug: Start JS");
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
  if(option == "trail") {
    trailOnHover();
  }
  else {
    paintOnHover();
  }
}

function paintOnHover() {
  $(' .square ').hover( function() {
    var $status = $(' .status ');
    if($status.hasClass("active")) {
      $( this ).addClass("coloured");
    }
  });
}

// function paintOnHover() {
//   $(".square").hover( 
//     function() {
//     if($('.status').hasClass("active")) {
//       $(this).addClass("coloured");
//     }
//   );
// }

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