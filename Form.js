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
    this.genderM = createRadio();
    this.genderM.option('male', 1);
    this.genderF = createRadio();
    this.genderF.option('female', 2);
  
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.genderM.hide();
    this.genderF.hide();
  }

display(){
  var title = createElement('h1');
  title.html("Escape the Nightville Mansion")

  this.input.position(130, 160);
  this.button.position(250,200);

  stroke("white");
  this.genderM.position(350, 200);
  this.genderF.position(350, 300);
  title.position(130, 0);

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


