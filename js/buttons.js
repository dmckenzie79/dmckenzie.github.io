$(document).ready(function() {
    $('#aboutButton').click(function() {
      $('#about-Me').slideToggle(1000);
    });
  });

$(document).ready(function() {
$('#formButton').click(function() {
    $('#contact-form').slideToggle(1000);
    $('#about-Me').slideUp(1000);
    });
});

$(document).ready(function() {
    $('#submit').click(function() {
    $('#contact-form').slideUp(1000);
    });
});