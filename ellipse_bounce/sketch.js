// var is a variable
// you can change this to any value
var x, y, xvel, yvel;

function setup() {
  // put setup code here
  // this code runs once
  // make a canvas, size 640 X 480 pixels
  createCanvas(640,480);
  // set values for x and y
  x = 20;
  y = 40;
  // set values for velocity
  xvel = 1;
  yvel = 2;
}

function draw() {
  // put drawing code here
  // make a circle at the location of x and y
  ellipse(x,y,20,20);

  // add the velocity to x and y
  x+=xvel;
  y+=yvel;

  // bounce the ball
  // if the ball goes too far in the canvas,
  // make the velocity negative by multiplying -1
  if(x > width || x < 0){
  	xvel = xvel * -1;
  }
  if(y > height || y < 0){
  	yvel = yvel * -1;
  }
}