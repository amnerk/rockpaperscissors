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

computerChoice = Math.random();

if (computerChoice > 0.8) {
     computerChoice= 'Scissors';
}
     
 if (computerChoice < 0.8 && computerChoice > .40) {
     computerChoice= 'Rock';
 }
 if (computerChoice < 0.40 && computerChoice > .20) {
     computerChoice= 'Paper';
 }
 if (computerChoice < 0.2 && computerChoice > .00) {
     computerChoice= 'Scissors';
 }
 if (computerChoice < 0.1 ) {
     computerChoice= 'Paper';
}
 if (userChoice === 'Rock' && computerChoice === 'Rock'){
    $("#result").text("draw!");
 }
 if (userChoice === 'Rock' && computerChoice === 'Scissors'){
    $("#result").text("user wins!");
 }
 if (userChoice === 'Rock' && computerChoice === 'Paper'){
    $("#result").text("computer wins!");
 }
 if (userChoice === 'Scissors' && computerChoice === 'Rock'){
    $("#result").text("computer wins!");
 }
 if (userChoice === 'Scissors' && computerChoice === 'Paper'){
    $("#result").text("user wins!");
 }
 if (userChoice === 'Scissors' && computerChoice === 'Scissors'){
    $("#result").text("draw!");
 }
 if (userChoice === 'Paper' && computerChoice === 'Rock'){
    $("#result").text("user wins!");
 }
 if (userChoice === 'Paper' && computerChoice === 'Scissors'){
    $("#result").text("computer wins!");
 }
 if (userChoice === 'Paper' && computerChoice === 'Paper'){
    $("#result").text("draw!");
 }

 $("#computerChoice").text(computerChoice);
});
// DOCUMENT READY FUNCTION BELOW

