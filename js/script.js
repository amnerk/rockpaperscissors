// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;
$("#shoot").click(function(){
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
});

// DOCUMENT READY FUNCTION BELOW

