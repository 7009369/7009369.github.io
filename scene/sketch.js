// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let d = 150;
let circleX;
let circleY;
let state = "show";

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  mousePressed();
  background("black");
}

function mouseClicked(){
  let circleX = random(mouseX - 300, mouseX + 300);
  let circleY = random(mouseY - 300, mouseY + 300);
  
  if (state === "show"){
    fill("red");
    circle(circleX, circleY, d);
    state = "hide";
  }

  if (dist (mouseX, mouseY, circleX, circleY) > d){
    remove();
    state = "hide";
  }

}

// function spawnNewCircle(){
  
// }

