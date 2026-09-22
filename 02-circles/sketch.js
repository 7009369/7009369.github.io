// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  
  noStroke()
  fill(random(255), random(255), random(255))
  circle(random(0, width), random(0, height), random(30,100))
}
