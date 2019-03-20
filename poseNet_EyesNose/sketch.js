// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
based on the example
https://github.com/ml5js/ml5-examples/tree/master/p5js/PoseNet/PoseNet_part_selection
=== */

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function mousePressed(){
  console.log(JSON.stringify(poses))
}

function draw() {
  image(video, 0, 0, width, height);
  strokeWeight(2);
print(poses.length);
  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {
    let pose = poses[0].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        // only draw the nose and eyes
        // create a pink ellipse for the nose
        print(keypoint);
        if(keypoint.part=='nose'){
        fill(213,0,143);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        // create a yellow ellipse for the right eye
      } else if(keypoint.part == 'rightEye'){
        fill(255,215,0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);        
        // create a yellow ellipse for the left  eye
      }else if(keypoint.part == 'leftEye'){
        fill(255,215,0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);        
      }
      }
    }
  }
}