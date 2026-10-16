// Arrays and Object Notation
// Ashad Hussain
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time = 0;
let deltatime = 0.02;
const TIME_OFFSET = 10000;
let millis;
let points = 0;


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  pointsDisplay();
  
  let circleX = noise(time) * width;
  let circleY = noise(time + TIME_OFFSET) * height;
  fill("black");
  circle(circleX, circleY, 200);
  time += deltatime;
  
}

function pointsDisplay(){
  if (mouseX >= circleX + 200 && mouseX <= circleX - 200 && mouseY >= circleY + 200 && mouseY <= circleY + 200){
    points = points + 1;
  }
  text(points, 100, 100);
}