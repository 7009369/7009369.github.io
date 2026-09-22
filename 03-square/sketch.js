// Square moving around the edge of screen
let x = 0;
let y = 0;
let size = 30;
let speed = 5;
let state = "right";

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  move();
  display();
}

function move(){
  if (state === 'right'){
    x += speed;
    if (x >= width- size){
      state = 'down';
    }
  }
  else if (state === 'down'){
    y += speed;
    if (y >= height- size){
      state = 'left';
    }
  }
  else if (state === 'left'){
    x += speed;
    if (x >= width- size){
      state = 'up';
    }
  }
}

function display() {
  fill("black");
  rect(x, y, size,);
}

// let x = 0;
// let y = 0;
// let dy = 3;
// let dx = 1;
// let w = 100;

// async function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);
//   fill(0);
//   rect(x, y, w*2, w*2);
//   if (y >= 0){
//     if (x <= windowWidth + w*2)
//       x += dx;
//   }
//   else{
//     y += dy;
//   }
  
  
// }