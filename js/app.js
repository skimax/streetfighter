$(document).ready(function() {
  $('.ryu').mouseenter(function() {
     $('.ryu-still').hide();
    $('.ryu-ready').show();
  });

$('.ryu').mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
 });


$('.ryu').mousedown(function() {
     playHadouken(); 
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
   $('.hadouken').finish().show();

$('.hadouken').animate (
  {'left': '1020px'},
  400,
  function() {
    $(this).hide();
    $(this).css('left', '-217px');
  }
);


  });

  $('.ryu').mouseup(function() {
     $('.ryu-throwing').hide();
     $('.ryu-ready').show();
    // ryu goes back to his ready position
  });

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playingsong() {
  $('#theme-song')[0].volume = 0.2;
  $('#theme-song')[0].load();
  $('#theme-song')[0].play();
}


$(document).keydown(function(event) {
    if (event.which==88)
   $('.ryu-ready').hide();
    $('.ryu-cool').show(); 
  
});


$(document).keyup(function(event) {
    if (event.which==88)
   $('.ryu-ready').show();
    $('.ryu-cool').hide(); 
  });

});