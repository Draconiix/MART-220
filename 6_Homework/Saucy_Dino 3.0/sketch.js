//variables
let Rex;
let Time;
let target = 60;

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
  
  //Food Draw
  for(i = 0; i < FoodArray.length; i++) {
    FoodArray[i].drawSauce()
    Rex.DinoEat(FoodArray[i])
  }
  
  //Dino Draw
  Rex.drawRex()
  Rex.DinoMovement()
  
  //Score Draw
  Rex.DinoScore()
  
  //Time Draw
  Time.timerDraw()
  Time.Finish(Rex)
  
  if(Time.time <= target){
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