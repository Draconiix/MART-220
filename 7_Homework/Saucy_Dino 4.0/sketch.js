//variables
let Rex;
let Time;
let Music;
let target = 60;


//Audio Preload
function preload(){
  MainSFX = loadSound('./sounds/FranticLevel.wav');
  MunchSFX = loadSound('./sounds/crunch.2.ogg')
  HurtSFX = loadSound('./sounds/painr.wav');
  
}

function setup(){
  createCanvas(800, 500);
  
  //Food Array
  makeFood()
  
  //Dino
  Rex = new Dino(400,210)
  
  //timer
  Time = new timer()
 
}

function draw() {
  background(50);
  
  //Background Audio
  Time.StartMainSFX()
  
  //Food Draw
  for(i = 0; i < FoodArray.length; i++) {
    FoodArray[i].drawSauce()
    Rex.DinoEat(FoodArray[i])
  }
  
  //Dino Draw
  Rex.drawRex()
  Rex.DinoMovement()
  
  //Score & Health Draw
  Rex.DinoScore()
  Rex.DinoHealth(food)
  
  //Time Draw
  Time.timerDraw()
  Time.Finish(Rex)
  
  if(Time.time <= target) {
  makeFood()
  target -= random(1,10);
  }
}

function makeFood() {
  FoodArray = []
  for(i = 0; i < 5; i++) {
    FoodArray.push(new food(random(10,750), random(30,450)))
    
  }
}