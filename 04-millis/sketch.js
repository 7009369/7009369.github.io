// Millis Demo

let waitTime = 2000;
let state = "red";

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  swapStateIfNeeded();
  drawBackground();
}

function swapStateIfNeeded(){
  if (millis() > lastSwapTime + waitTime){
    if(state === "red"){
      state = "black";
    }
  }
  else if (state === "black"){
    state = "red";
  }
}

function drawbackground(){
  if (state === "black"){
    background("black");
  }
  else if(state === "red"){
    background("red");
  }

}


// function draw() {
//   // if (millis() < waitTime) {
//   //   background("black");
//   // }
//   // else{
//   //   background("red");
//   // }
//   if (state === "black"){
//     if (millis < waitTime){
//       background("black");
//       state = "red";
//     }
//   }
//   else if(state === "red"){
//     if (millis < waitTime + 2000){
//       background("red");
//       state = "black";
//     }
//   }

//   // console.log(millis());
// }
