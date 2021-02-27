/*class Form {
  constructor() {
    this.input = createInput("Name")
    this.button = createButton('Play')
    this.greeting = createElement('h3')
  }
  hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}*/

class Form{
  constructor(){
    this.input = createInput("Name")
    this.button = createButton('Play')
    this.greeting = createElement('h3')
    this.genderMButton = createButton('male');
    this.genderFButton = createButton('female');
  
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.genderMButton.hide();
    this.genderFButton.hide();
    
  }

display(){
  var title = createElement('h1');
  title.html("Escape the Nightville Mansion")


  this.input.position(130, 160);
  this.button.position(250,200);

  stroke("white");
  this.genderMButton.position(350, 200);
  this.genderFButton.position(350, 300);
  title.position(130, 0);

  this.genderMButton.mousePressed(()=>{
    console.log(this.genderMButton);

    gender = "male";


    this.genderMButton.hide();
    this.genderFButton.hide();

    playerM = createSprite(50,500);
    playerM.addImage("boyForward.jpg", playerMImage)
    playerM.scale = 0.3;
  });

this.genderFButton.mousePressed(()=>{
  gender = "female";

  this.genderMButton.hide();
  this.genderFButton.hide();

  playerF = createSprite(50,500);
  playerF.addImage("girlForward.png", playerFImage)
  playerF.scale = 0.3;

});

  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    

    var name = this.input.value();

    //var radio = this.genderM.value();
    //var radio1 = this.genderF.value();

    this.greeting.html("Hello "+ name)
    this.greeting.position(130, 160)
    gameState = "play"; 
  });
  

} 
}


