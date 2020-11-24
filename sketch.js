var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4,track,cars
var trackImage,car1Image,car2Image,car3Image,car4Image;
var form, player, game;
var gameBackground
var mainCharacter;
var player1;
function preload(){
  car1Image=loadImage("../car1.png");
  car2Image=loadImage("../car2.png");
  car3Image=loadImage("../car3.png");
  car4Image=loadImage("../car4.png");
  trackImage=loadImage("../track.jpg");
  groundImage=loadImage("../ground.png");
  gameBackground=loadImage("../242332.jpg");
  mainCharacter=loadImage("../main character.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(gameBackground);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState== 2){
    game.end();
  }
}
