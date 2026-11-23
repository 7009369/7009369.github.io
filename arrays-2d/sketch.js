const CELL_SIZE = 100;
const OPEN_TILE = 0;   // green (walkable)
const IMPASSIBLE = 1;  // orange (lava)
const PLAYER = 9;

let rows;
let cols;
let grid;
let thePlayer = {
  x: 0,
  y: 0,
};

let startTime;
let roundLength = 5000; // 5 seconds
let warningTime = 2000; // highlight safe spots in last 2 seconds
let safe1 = { x: 0, y: 0 };
let safe2 = { x: 0, y: 0 };
let gameOver = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = floor(height / CELL_SIZE);
  cols = floor(width / CELL_SIZE);
  startRound();
}

function startRound() {
  gameOver = false;
  grid = generateEmptyGrid(cols, rows);
  grid[thePlayer.y][thePlayer.x] = PLAYER;
  pickSafeSpots();
  startTime = millis();
}

function pickSafeSpots() {
  safe1.x = floor(random(cols));
  safe1.y = floor(random(rows));

  safe2.x = floor(random(cols));
  safe2.y = floor(random(rows));

  // make sure the two safe spots are different
  while (safe2.x === safe1.x && safe2.y === safe1.y) {
    safe2.x = floor(random(cols));
    safe2.y = floor(random(rows));
  }
}

function draw() {
  background(220);

  let elapsed = millis() - startTime;
  let timeLeft = (roundLength - elapsed) / 1000;
  let highlightSafe = !gameOver && elapsed >= roundLength - warningTime;

  if (!gameOver && elapsed >= roundLength) {
    turnBoardToLava();
  }

  displayGrid(highlightSafe);

  fill(0);
  textSize(24);
  if (gameOver) {
    text("Game Over! Press R to restart", 20, 40);
  } else {
    text("Time: " + nf(max(0, timeLeft), 1, 1), 20, 40);
  }
}

function turnBoardToLava() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let isSafe = (x === safe1.x && y === safe1.y) || (x === safe2.x && y === safe2.y);
      if (!isSafe) {
        grid[y][x] = IMPASSIBLE;
      }
    }
  }

  let playerSafe =
    (thePlayer.x === safe1.x && thePlayer.y === safe1.y) ||
    (thePlayer.x === safe2.x && thePlayer.y === safe2.y);

  if (playerSafe) {
    startRound();
  } else {
    gameOver = true;
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    thePlayer.x = 0;
    thePlayer.y = 0;
    startRound();
  }
  else if (!gameOver && (key === 'd' || key === 'D')) {
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
  else if (!gameOver && (key === 'a' || key === 'A')) {
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
  else if (!gameOver && (key === 'w' || key === 'W')) {
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  else if (!gameOver && (key === 's' || key === 'S')) {
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
}

function movePlayer(x, y) {
  // don't walk off the grid or onto lava
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === OPEN_TILE) {
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;

    thePlayer.x = x;
    thePlayer.y = y;

    grid[thePlayer.y][thePlayer.x] = PLAYER;
    grid[oldY][oldX] = OPEN_TILE;
  }
}

function displayGrid(highlightSafe) {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_TILE) {
        fill("green");
        square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === IMPASSIBLE) {
        fill("orange");
        square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === PLAYER) {
        fill("red");
        square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }

      if (highlightSafe) {
        let isSafe = (x === safe1.x && y === safe1.y) || (x === safe2.x && y === safe2.y);
        if (isSafe) {
          fill(255, 255, 0, 120);
          stroke(255, 255, 0);
          strokeWeight(8);
          square(x * CELL_SIZE + 4, y * CELL_SIZE + 4, CELL_SIZE - 8);
          strokeWeight(1);
          stroke(0);
        }
      }
    }
  }
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}