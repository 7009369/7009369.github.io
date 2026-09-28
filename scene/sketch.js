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
  background(255);
  mousePressed(); 
}

function mousePressed(){
  fill("black");
  if (mouseIsPressed){
    circle(random, random, 100);
  }
}


