class Dino{
  
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.h = 100;
    this.w = 150;

    this.CollideH = 50;
    this.CollideW = 20;
    this.flip = false;
    this.score = 0;
    this.health = 100;
    
    this.DinoAnimationIndex = 0;
    
    
    //Idle Array
    this.DinoIdleArray = []
    for(i = 1; i < 11; i++) {
      this.DinoIdleArray.push(loadImage(`./images/Idle/Idle (${i}).png`))
    }
    
    //Walk Array
    this.DinoWalkArray = []
    for(i = 1; i < 11; i++) {
      this.DinoWalkArray.push(loadImage(`./images/Walk/Walk (${i}).png`))
    }
    
    this.CurrentAnimation = this.DinoIdleArray
  }

  drawRex() {
    push()
    this.DinoAnimationIndex += 0.3;
    if(this.DinoAnimationIndex >= this.CurrentAnimation.length) {
       this.DinoAnimationIndex = 0;
    }
    
    translate(this.x-50,this.y-50)
    
    if(this.flip) {
      scale(-1,1)
    }
    //Idle
    image(this.CurrentAnimation[floor(this.DinoAnimationIndex)],-50,0,this.w,this.h)
    pop()
  }

  DinoMovement() {
  this.CurrentAnimation = this.DinoIdleArray
  //D Key
  if(keyIsDown(68))
    {
      this.CurrentAnimation = this.DinoWalkArray
      this.x +=5;
      this.flip = false;
    }
  //A Key
  if(keyIsDown(65))
    {
      this.CurrentAnimation = this.DinoWalkArray
      this.x -=5;
      this.flip = true;
    }
  //S Key
  if(keyIsDown(87))
    {
      this.CurrentAnimation = this.DinoWalkArray
      this.y -=5;
    }
  //W Key
  if(keyIsDown(83))
    {
      this.CurrentAnimation = this.DinoWalkArray
      this.y +=5;
    }
 }
  DinoEat(food) {
    if(collideRectRect(this.x-50,this.y-20,this.CollideW,this.CollideH,food.x,food.y,food.w,food.h) && food.visible && !food.rotten) {
      food.visible = false;
      this.score += 1;
      MunchSFX.setVolume(0.4)
      MunchSFX.play()
    }
    if(collideRectRect(this.x-50,this.y-20,this.CollideW,this.CollideH,food.x,food.y,food.w,food.h) && food.visible && food.rotten) {
      food.visible = false;
      this.score -= 1;
      this.health -= 10;
      HurtSFX.setVolume(0.4)
      HurtSFX.play()
    }
  }
  DinoScore() {
    fill(200,200,200)
    textSize(36)
    text("Score: " + this.score,10,40)
  }
  
  DinoHealth() {

    //Health Score
    fill(100,200,100)
    textSize(36)
    text("Health: " + this.health,300,40)
    
    //Game Over at 0 Health
    if(this.health <= 0){
      push()
      fill(200,0,0)
      strokeWeight(10)
      stroke(0,0,0)
      text("Game Over",300,250)
      MainSFX.stop()
      noLoop()
      pop()
    }

  }
}
