// alert("Hi!");

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var randomChosenColour = buttonColours[nextSequence(0, 3)];

gamePattern.push(randomChosenColour);

$('#' + randomChosenColour).fadeOut(150).fadeIn(150);
// $('audio#' + randomChosenColour + 'Sound')[0].play();
new Audio('sounds/' + randomChosenColour +'.mp3').play();

$(".btn").click(function() {
  var userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});


// == methods ==
function nextSequence(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

// function flushButton(id, flushTime) {
//   $(#id).fadeOut(flushTime).fadeIn(flushTime);
// }
