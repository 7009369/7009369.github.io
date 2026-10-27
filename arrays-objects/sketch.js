// Arrays and Object Notation
// Ashad Hussain
// 2026-10-26
//
// Extra for Experts:
//I used the p5.js function nf in line 98.

let points = 0;
let rankNow = "";
let ranks = ["Iron", "Silver", "Gold", "Diamond", "Immortal"];
let totalTime = 15;
let startTime = 0;
let timeLeft = totalTime;
let gameOver = false;


let theBall = {
  x: 0,
  y: 0,
  diameter: 200,
  time: 0,
  timeOffset: 10000,
  speed: 0.02,

  move(){
    theBall.x = noise(theBall.time) * width;
    theBall.y = noise(theBall.time + theBall.timeOffset) * height;
    theBall.time += theBall.speed;
  },

  display(){
    stroke(0);
    fill("red");
    circle(theBall.x, theBall.y, theBall.diameter)
  }
};
 

async function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function draw() {
  background(255);

  let timeGone = (millis()- startTime) / 1000;
  timeLeft = totalTime - timeGone;
  
  if(timeLeft <= 0){
    timeLeft = 0;
    gameOver = true;
    noLoop();
  }

  if(!gameOver){
    theBall.move();
    theBall.display();
    scoreCheck();
    changeRank();
  }
  displayUI();
}

function scoreCheck(){
  let d = dist(mouseX, mouseY, theBall.x, theBall.y);
  if (d < theBall.diameter/2){
    points = points + 1;
  }
}

function changeRank(){
  if(points >= 600){
    rankNow = ranks[4];
  }
  else if(points >= 300){
    rankNow = ranks[3];
  }
  else if(points >= 100){
    rankNow = ranks[2];
  }
  else if(points >= 50){
    rankNow = ranks[1];
  }
  else{
    rankNow = ranks[0];
  }
}

function displayUI(){
  fill(0);
  noStroke();
  textSize(20);
  textFont("Georgia");

  text("Points: " + points, 50, 80);
  text("Rank: " + rankNow, 50, 120);
  text("Time Left: " + nf(timeLeft, 1, 1) + "s", 50, 160);
  if(gameOver){
    textSize(50);
    textAlign(CENTER, CENTER);
    text("GAME OVER!", width/2, height/2);
    textSize(25);
    text("Final Score: " + points + " (" + rankNow + ") ", width/2, height/2 + 50);
  }
}

