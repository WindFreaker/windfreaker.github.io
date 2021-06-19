console.log("loading background");


var canvas = document.getElementById("background");
var context = canvas.getContext("2d");

context.beginPath();
context.arc(95, 50, 40, 0, 2 * Math.PI);
context.stroke();
