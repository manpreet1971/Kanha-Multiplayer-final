var canvas;
var backgroundImage, car1Img, car2Img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var obstacles,obstacle1Image,obstacle2Image,obstacle1,obstacle2;
var fuels,fuel,fuelImage,lifeImage;
var powerCoinImage,powerCoins;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("../assets/car1.png");
  car2Img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  fuelImage = loadImage("./assets/fuel.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("blue");
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
