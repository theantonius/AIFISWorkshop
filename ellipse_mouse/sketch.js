function setup() {
  // put setup code here
  // this code runs once
  // make a canvas, size 640 X 480 pixels
  createCanvas(640,480);
}

function draw() {
  // put drawing code here
  // make a circle at the location of your mouse
  ellipse(mouseX,mouseY,20,20);
}