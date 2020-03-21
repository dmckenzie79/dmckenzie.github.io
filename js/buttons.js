/*
============================================
; Title:  buttons.js
; Author: Diandra McKenzie
; Date:   21 March 2020
; Description: Programs for button toggles and slides
;===========================================
*/

//start program

//More About Me Button
$(document).ready(function() {
    $('#aboutButton').click(function() {
      $('#about-Me').slideToggle(1000);
    });
  });

  //Contact Form Button
$(document).ready(function() {
$('#formButton').click(function() {
    $('#contact-form').slideToggle(1000);
    $('#about-Me').slideUp(1000);
    });
});

//Form Submit Button
$(document).ready(function() {
    $('#submit').click(function() {
    $('#contact-form').slideUp(1000);
    });
});

//end program