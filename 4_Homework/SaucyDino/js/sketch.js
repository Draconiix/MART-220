//variables
var Rex;

function preload(){
  
}

function setup(){
  createCanvas(800, 500);
  
  //Food Array
  FoodArray = []
  for(i = 0; i < 5; i++) {
    FoodArray.push(new food(random(10,width), random(20,height), random(10,20)))
  }
  
  //Dino
  Rex = new Dino(10,10)

}

function draw() {
  background(50);
  
  //Food Draw
  for(i = 0; i < FoodArray.length; i++) {
    FoodArray[i].drawCircle()
  }
  //Dino Draw
  Rex.drawRex()
  Rex.DinoMovement()
}
//KeyInput Function
function keyPressed(){
  
}