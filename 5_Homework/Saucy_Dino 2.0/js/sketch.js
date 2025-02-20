//variables
let Rex;

function setup(){
  createCanvas(800, 500);
  
  //Food Array
  FoodArray = []
  for(i = 0; i < 5; i++) {
    FoodArray.push(new food(random(10,750), random(10,450)))
  }
  
  //Dino
  Rex = new Dino(400,210)

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
 
}