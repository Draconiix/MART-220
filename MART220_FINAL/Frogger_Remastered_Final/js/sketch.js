//Variables//
let Score;
let Frog;

function setup(){
  createCanvas(800,800)
  
  Score = new Lives()
  
  Frog = new froggo(width/2,720)
  
  makeVehicles()
}

function draw(){
  background(50)
  
  //Road//
  createRoad();
  
  //Drawing Frog//
  Frog.drawFrog()
  Frog.frogMove()
  //Drawing Vehicles//
  for(i = 0; i < VehicleArray.length; i++){
    VehicleArray[i].drawVehicle()
  }
  
  Frog.frogGotHit();
  //TEMP Borders, need to figure out how to create a class & collision//
  //createBorders(20);
  
  //LIVES COUNT//
  Score.drawLives();
  Score.drawEXIT();
  Score.drawBorders(20);
  Score.drawGameOver();

}
function makeVehicles(){
  VehicleArray = []
    VehicleArray.push(new Vehicle(0,165))
    VehicleArray.push(new Vehicle(0,415))
    VehicleArray.push(new Vehicle(0,280))
    VehicleArray.push(new Vehicle(0,535))
}
function createBorders(thickness)
{
  fill(50);
  // top left border
  rect(0,0,200,thickness);
  // top right border
  rect(600,0,width,thickness);
  // left border
  rect(0,0,thickness,height);
  // bottom border
  rect(0, height-thickness,width, thickness);
  // right upper border
  rect(width-thickness,0,thickness,height);
}
function createRoad()
{
  fill(0,100,50)
  //Bottom walkway//
  rect(0,650,width,150);
  //Upper walkway//
  rect(0,0,800,150);
  //Mid//
  push()
  stroke(225,150,0);
  strokeWeight(6);
  line(0,400,width,400)
  //Edges//
  stroke(135)
  line(0,150,width,150)
  line(0,650,width,650)
  pop()
  //White upper//
  push()
  stroke(225);
  strokeWeight(4);
  drawingContext.setLineDash([72,30])
  line(0,275,width,275)
  pop()
  //White Lower//
  push()
  stroke(225);
  strokeWeight(4);
  drawingContext.setLineDash([72,30])
  line(0,525,width,525)
  pop()
}