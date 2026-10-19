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
let circleX;
let circleY;


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  ballMove();
  followingBall();
}

function ballMove(){
  circleX = noise(time) * width;
  circleY = noise(time + TIME_OFFSET) * height;
  fill("black");
  circle(circleX, circleY, 200);
  time += deltatime;
}

function followingBall(){
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < 200){
    points = points + 1;
    background("red");
  }
  fill(0);
  noStroke();
  textSize(20);
  textFont("Georgia");
  text("Your Points : " + points, 50, 100);
}