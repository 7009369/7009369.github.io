// Arrays and Object Notation
// Ashad Hussain
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let time = 0;
let deltatime = 0.01;
const TIME_OFFSET = 10000;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  
  let x = noise(time) * width;
  let y = noise(time + TIME_OFFSET) * height;
  fill("black");
  circle(x, y, 200);
  time += deltatime;


}