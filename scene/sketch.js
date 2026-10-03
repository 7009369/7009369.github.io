// Interactive Scene
// Ashad Hussain
// October 02, 2026
//
//Extra for Experts:
//I used the map() function from the p5js refernceto make the circles change color as time passed


//Declare Values 
let circleX, circleY; 
let circleRadius = 90; 
<<<<<<< HEAD
let score = 0;
let circleTimer = 0;
let circleCount = 0;
let maxCircles = 30;
let gameOver = false;
let buttonX, buttonY, buttonWidth, buttonHeight;
=======
<<<<<<< HEAD
let score = 0;
let maxTries;
       

function setup() {
  createCanvas(windowWidth, windowHeight); 
  maxTries = 0;
  if (maxTries <= 30){
    spawnCircle();         
  }
  else{
    fill(0);
    noStroke();
    textSize(100);
    textAlign(LEFT, TOP);
    text("Score: " + score, windowWidth/2, windowHeight/2);
  }

=======
let score = 0;       
>>>>>>> 1160ed06d42840e9bb95c2d9c21e7fe84f3f04bf


//Main target spawning function and play again button
function setup() {
  createCanvas(windowWidth, windowHeight); 
  buttonWidth = 200;
  buttonHeight = 50;
  buttonX = width / 2 - buttonWidth / 2
  buttonY =  height / 2 - buttonHeight / 2 + 100
  spawnCircle();          
>>>>>>> 45587fa182584c68b89a9bae5ed9edd03f04724a
}

function draw() {
  background(220);
//Time the targets and make targets change color from green to red as more and more time passes
  if (!gameOver){
    let timePassed = millis() - circleTimer;
  
    let r = map(timePassed, 0, 800, 0, 255);
    let g = map(timePassed, 0, 800, 255, 0);
    fill(r, g, 0);   
    stroke(0);           
    strokeWeight(2);
    circle(circleX, circleY, circleRadius * 2); 

    fill(0);
    noStroke();
    textSize(24);
    textAlign(LEFT, TOP);
    text("Score: " + score, 20, 20);

    if(timePassed > 800){
      spawnCircle();
    }
  }

//Ending screen and Play button
  else{
    fill(0);
    noStroke();
    textSize(36);
    textAlign(CENTER, CENTER);
    text("GAME OVER!", width / 2, innerHeight / 2);
    textSize(24);
    text("Final Score: " + score + " / " + maxCircles, width / 2, height / 2 + 30);

    //Restart Button
    stroke(0);
    strokeWeight(2);

    if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight){
      fill(180, 220, 180);
    }
    else{
      fill(255);
    }

    rect(buttonX, buttonY, buttonWidth, buttonHeight);

    fill(0);
    noStroke();
    textSize(20);
    text("Play Again", width / 2, buttonY + buttonHeight / 2);
  }
}

//Detect if mouse hit target or notand play again button setup
function mousePressed() {
  if (gameOver){
    if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight){
      resetGame();
    }
    return;
  }

  let d = dist(mouseX, mouseY, circleX, circleY);

  if (d < circleRadius) {
<<<<<<< HEAD
    score++;       
    spawnCircle();   
  }
  maxTries++;
=======
    score++;        
    spawnCircle();   
  }
>>>>>>> 45587fa182584c68b89a9bae5ed9edd03f04724a
}

//target spawning
function spawnCircle(){
  if (circleCount >= maxCircles){
    gameOver = true;
    return;
  }
  circleCount++;
  circleX = random(circleRadius, windowWidth - circleRadius);
  circleY = random(circleRadius, windowHeight - circleRadius);
  circleTimer = millis();
}

//restart game
function resetGame(){
  score = 0;
  circleCount = 0;
  gameOver = false;
  spawnCircle();
}

