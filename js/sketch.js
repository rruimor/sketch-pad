$(document).ready(function(){
  initSketch();


});

function initSketch(){
  for (var i = 0; i < 16; i++) {
      $('.matrix').append('<div class="row" id="row-' + i + '"></div>');
    for (var j = 0; j < 16; j++) {
      $('.matrix #row-' + i ).append('<div class="square" id="' + j + '"></div>');
    }
  }
}

function resetSketch(){
  
}