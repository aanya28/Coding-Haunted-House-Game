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

var canvas, form;
var gameState = "wait";
var playerM, playerF, playerFRight, playerMRight;
var room1, room2, room3;
var gender;
var zombie, zombieImage, zombieGroup;

function preload(){
  playerMImage = loadImage("images/boyForward.jpg");
  playerMRight = loadImage("images/boyRight.jpg");

  playerFImage = loadImage("images/girlForward.jpg");
  playerFRight = loadImage("images/girlRight.jpg");

  room1 = loadImage("images/room1.jpg");
  room2 = loadImage("images/room2.jpg");
  room3 = loadImage("images/room3.jpg");

  zombieImage = loadImage("images/zombieLeft.jpg");

}

function setup(){
  canvas = createCanvas(600,600);
  form = new Form();

  zombieGroup = new Group();
  

  //var radio = form.genderM.value();
  //var radio1 = form.genderF.value();

  //console.log(form.genderM.option);
  /*if(form.genderM){
    playerM = createSprite(20,20,200,200);
    playerM.addImage("boyForward.jpg");
  }
  else{
  playerF = createSprite(20, 20,100,100);
  playerF.addImage("girlForward.jpg")
  }*/
  
}

function draw(){
  
  if(gameState === "wait"){
    form.display();
  }

  if(gameState === "play"){
    clear();
    form.hide();

    background(room1);

    console.log(gender);

    if(keyDown(RIGHT_ARROW) && gender === "male"){
      playerM.x = playerM.x +10;
    }

    if(keyDown(LEFT_ARROW) && gender === "male"){
      playerM.x = playerM.x -10;
    }

    if(keyDown(RIGHT_ARROW) && gender === "female"){
      playerF.x = playerF.x +10;
    }

    if(keyDown(LEFT_ARROW) && gender === "female"){
      playerF.x = playerF.x -10;
    }

    /*if(mousePressed(zombie)){
      zombieGroup.destroyEach();
    }*/

    /*zombie.mousePressed(()=>{
      zombieGroup.destroyEach();
    });*/

    //image(room1,0,0,600,600);

    spawnZombies();
    drawSprites();
  }
  
}

function spawnZombies() {
  //write code here to spawn the zombies
  if (frameCount % 100 === 0) {
    var zombie = createSprite(200,200,40,10);
    zombie.y = 400;
    zombie.x = Math.round(random(0,600));
    zombie.addImage(zombieImage, "zombieLeft.jpg");
    zombie.scale = 0.3;
    //zombie.velocityX = -5;
    
    
    //add each cloud to the group
    zombieGroup.add(zombie);
  }
}
