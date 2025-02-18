class Dino{
  
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.h = 100;
    this.w = 150;
    this.flip = false;
    
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
    
    translate(this.x,this.y)
    
    if(this.flip) {
      scale(-1,1)
    }
    //Idle
    image(this.CurrentAnimation[floor(this.DinoAnimationIndex)],-50,0,this.w,this.h)
    pop()
  }

  
 DinoMovement(){
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
}