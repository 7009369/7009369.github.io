
let circleX, circleY; 
let circleRadius = 90; 
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

function setup() {
  createCanvas(windowWidth, windowHeight); 
  spawnCircle();          
>>>>>>> 45587fa182584c68b89a9bae5ed9edd03f04724a
}

function draw() {
  background(220); 

  fill(255, 50, 50);   
  stroke(0);           
  strokeWeight(2);
  circle(circleX, circleY, circleRadius * 2); 

  fill(0);
  noStroke();
  textSize(24);
  textAlign(LEFT, TOP);
  text("Score: " + score, 20, 20);
}

function mousePressed() {
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


function spawnCircle() {
  circleX = random(circleRadius, windowWidth - circleRadius);
  circleY = random(circleRadius, windowHeight - circleRadius);
}