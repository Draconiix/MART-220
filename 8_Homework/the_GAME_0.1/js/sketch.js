//Variables//
let Char;
let Count;
let target = 60;

function setup() {
  createCanvas(800, 500);
  
  Char = new Sprite(400,210)
  Count = new score()
  
  makeCoin()
  makeRock()
}

function draw() {
  background(50);
  
  //Coin Draw
  for(i = 0; i < CoinArray.length; i++) {
    CoinArray[i].drawCoin()
    Char.spriteGrab(CoinArray[i])
  }
  //Rock Draw
  for(i = 0; i < RockArray.length; i++) {
    RockArray[i].drawRock()
  }
  
  //Character Draw//
  Char.drawSprite()
  Char.spriteMovement()
  
  //Score&Health Draw//
  Count.drawHealth()
  Count.drawScore()
  Count.finish()
  
  //Food Randomizer//
  Count.drawTime()
  if(Count.time <= target) {
  makeCoin()
  target -= random(1,10);
  }
  
  
} 
function makeCoin() {
  CoinArray = []
  for(i = 0; i < 5; i++) {
    CoinArray.push(new Coin(random(10,750), random(30,450)))
  }
}

function makeRock() {
  RockArray = []
  for(i = 0; i < 3; i++) {
    RockArray.push(new Rock(random(10,750), random(30,450)))
  }
}