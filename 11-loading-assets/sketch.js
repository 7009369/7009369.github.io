//Loading Images and sounds

let coinImg;
let coinSound;
let angle = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  coinImg = await loadImage("coin.png");
  coinSound = await loadSound("coin.wav");
}

function draw() {
  background("black");

  angle += 1;

  rotateY(frameCount * 0.01);
  image(coinImg, width/2, height/2);
}

function mousePressed(){
  coinSound.play();
}