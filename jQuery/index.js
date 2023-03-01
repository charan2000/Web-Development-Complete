
// $("h1").addClass("big-title");



// Can access attributes with .attr() method
// $('h3').attr("")

// Adding event Listners with click
$('button').on("click", function() {
    $('h1').css('color','coral');
});

// Adding event listners with keypress  ( to a input tag )
$(document).keypress(function(event) {
    console.log(event.key);
    $('h1').text(event.key);
});

// * ANIMATIONS *
// FadeOut & FadeIn for fading an element or whatever u select in the $()
// .animate({}), .fadeIn(), .fadeOut(), .fadeToggle(),  
 
