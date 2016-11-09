// Global variables.
var ballX = 150;		// Ball x position.
var ballY = 150;		// Ball y position.
var xPos = 80;			// x position of Weby (head midpoint)
var yPos = 50;			// y position of Weby (head midpoint)
var armPos = 40;		// Only necessary if you want to move his arm per keypress
var kopfPosX = 0;		// Only necessary if you want to move his head per keypress
var boardX = 500;		// Board width
var boardY = 400;		// Board height
var canvas;				// Canvas element
var context;			// Canvas context
var dx = 2;
var dy = 4;
var myInterval;

function drawCanvasCity() {
	canvas = document.getElementById("canvasCity");
  	context = canvas.getContext("2d");
  	init();
}

function init() {
	myInterval = setInterval(draw, 10);
	return myInterval;
}

var rightDown = false;
var leftDown = false;
var upDown = false;
var downDown = false;

function onKeyDown(evt) {
	if(evt.keyCode == 39) rightDown = true;
	else if(evt.keyCode == 37) leftDown = true;
	else if(evt.keyCode == 38) upDown = true;
	else if(evt.keyCode == 40) downDown = true;
}

function onKeyUp(evt) {
	if(evt.keyCode == 39) rightDown = false;
	else if(evt.keyCode == 37) leftDown = false;
	else if(evt.keyCode == 38) upDown = false;
	else if(evt.keyCode == 40) downDown = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function draw(){
	context.clearRect(0, 0, boardX, boardY);
	drawWeby();
	drawBall();
}

function drawWeby() {
	if(rightDown) xPos+=2;
	else if(leftDown) xPos-=2;
	else if(upDown) yPos-=2;
	else if(downDown) yPos+=2;

	// Head
	context.beginPath();
	context.arc(xPos + kopfPosX, yPos, 28, 0, Math.PI * 2, true);
	context.lineWidth = 5;
	context.stroke();
	context.beginPath();
	context.arc(xPos + kopfPosX, yPos, 28, 0, Math.PI * 2, true);
	context.fillStyle = "#dedede";
	context.fill();

	// Left eye
	context.beginPath();
	context.arc(xPos - 10 + kopfPosX, yPos - 5, 4, 0, Math.PI * 2);
	context.lineWidth = 2;
	context.stroke();

	// Right eye
	context.beginPath();
	context.arc(xPos + 9 + kopfPosX, yPos - 5, 4, 0, Math.PI * 2);
	context.lineWidth = 2;
	context.stroke();

	// Left arm
	context.beginPath();
	context.moveTo(xPos - 20, yPos + 35);
	context.lineTo(xPos - 34, yPos + armPos);
	context.lineWidth = 10;
	context.lineCap = "round";
	context.strokeStyle = "black";
	context.stroke();

	// Right arm
	context.beginPath();
	context.moveTo(xPos + 20, yPos + 35);
	context.lineTo(xPos + 34, yPos + 40);
	context.lineWidth = 10;
	context.lineCap = "round";
	context.strokeStyle = "black";
	context.stroke();

	// Body
	context.fillStyle = "#6a6a6a";
	context.fillRect(xPos - 20, yPos + 20, 40, 30);
	context.strokeStyle = "black";
	context.lineWidth = "2";
	context.strokeRect(xPos - 19, yPos + 20, 38, 30);

	// Left leg
	context.fillStyle = "#a8a8a8";
	context.fillRect(xPos - 14, yPos + 50, 15, 20);
	context.strokeStyle = "black";
	context.lineWidth = "2";
	context.strokeRect(xPos - 14, yPos + 51, 14, 19);

	// Right leg
	context.fillStyle = "#a8a8a8";
	context.fillRect(xPos + 1, yPos + 50, 15, 20);
	context.strokeStyle = "black";
	context.lineWidth = "2";
	context.strokeRect(xPos + 1, yPos + 51, 14, 19);

	// Left foot
	context.fillStyle = "red";
	context.fillRect(xPos - 21, yPos + 70, 20, 7);
	context.strokeStyle = "black";
	context.lineWidth = "2";
	context.strokeRect(xPos - 21, yPos + 70, 20, 7);

	// Right foot
	context.fillStyle = "red";
	context.fillRect(xPos + 1, yPos + 70, 20, 7);
	context.strokeStyle = "black";
	context.lineWidth = "2";
	context.strokeRect(xPos + 1, yPos + 70, 20, 7);
}

function drawBall(){

	context.beginPath();
	context.arc(ballX, ballY, 10, 0, Math.PI*2, true);
	context.closePath();
	context.fill();

	if(ballX + dx > boardX || ballX + dx < 0)
		dx = -dx;

	if(ballY + dy > boardY || ballY + dy < 0)
		dy = -dy;

	if((ballY+dy > (yPos - 28) && ballY+dy < (yPos + 70)) && (ballX+dx < (xPos + 28) && ballX+dx > (xPos - 28))){
		clearInterval(myInterval);
		alert("Game over");
	}

	ballX += dx;
	ballY += dy;
}