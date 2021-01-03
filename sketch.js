/*var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState ===1){
    clear();
    game.play();
    
  }
}*/

var canvas, form
var gameState = "wait";
var playerM, playerF

function setup(){
  canvas = createCanvas(400,400);
  form = new Form()

  var radio = form.genderM.value();
  var radio1 = form.genderF.value();

  console.log(form.genderM.option);
  if(form.genderM){
    playerM = createSprite(20,20,200,200);
    playerM.shapeColor = "blue";
  }
  else{
  playerF = createSprite(20, 20,100,100);
  playerF.shapeColor = "red";

  }
  
}

function draw(){
  background(255);
  
  if(gameState === "wait"){
    form.display();
  }

  if(gameState === "play"){
    clear();
    form.hide();

    text("play state", 200, 200);

    drawSprites();
  }
  
}
