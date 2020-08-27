var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Img,car2Img,car3Img,car4Img,bgImg
function preload(){
//car1Img=loadImage("C:\\Users\\shree\\Desktop\\multiplayer-car-incorrect-master\\image\\car1.png");
car1Img=loadImage("../image/car1.png")
car2Img=loadImage("../image/car2.png");
car3Img=loadImage("../image/car3.png");
car4Img=loadImage("../image/car4.png");
bgImg=loadImage("../image/track.png");
console.log(displayHeight);
console.log(displayWidth);

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
 /* if(CarsAtEn)*/
}
