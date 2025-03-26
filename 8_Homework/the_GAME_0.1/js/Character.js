class Sprite{
  
  //Properties//
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.h = 100;
    this.w = 150;
    
    this.CollideH = 50;
    this.CollideW = 20;
    this.flip = false;
    
    //Animations p5.play//
    
    //=IDLE=//
    this.IdleAni = loadAni('assets/images/Idle/Owlet_Monster_Idle_4.png', 
                           {width: 32, height: 32, frames: 4})
    
    this.IdleAni.frameDelay = 10;
    
    //=WALK=//
    this.WalkAni = loadAni('assets/images/Walk/Owlet_Monster_Walk_6.png', 
                           {width: 32, height: 32, frames: 6})
    this.WalkAni.frameDelay = 10;
    
    //=RUN=//
    this.RunAni = loadAni('assets/images/Run/Owlet_Monster_Run_6.png', 
                          {width: 32, height: 32, frames: 6})
    this.WalkAni.frameDelay = 10;
    
    this.CurrentCharAni = this.IdleAni
    //----------------//
  }
  
  //Functions//
  drawSprite() {
    push()
    
    translate(this.x-16,this.y-16)
    noSmooth()
    scale(3,3)
    
    if(this.flip) {
      scale(-1,1)
    }
    
    //Idle
    animation(this.CurrentCharAni,0,0)

    pop()
  }

  spriteMovement() {
    
  this.CurrentCharAni = this.IdleAni
    
    //W Key
  if((kb.pressing('w') || kb.pressing('ArrowUp')) && !this.spriteCollideRock(0,-4))
    {
      this.CurrentCharAni = this.WalkAni
      this.y -=4;
    }
  //A Key
  if((kb.pressing('a') || kb.pressing('ArrowLeft')) && !this.spriteCollideRock(-4,0))
    {
      this.CurrentCharAni = this.WalkAni
      this.x -=4;
      this.flip = true;
    }
  //S Key
  if((kb.pressing('s') || kb.pressing('ArrowDown')) && !this.spriteCollideRock(0,+4))
    {
      this.CurrentCharAni = this.WalkAni
      this.y +=4;
    }
  //D Key
  if((kb.pressing('d') || kb.pressing('ArrowRight')) && !this.spriteCollideRock(+4,0))
    {
      this.CurrentCharAni = this.WalkAni
      this.x +=4;
      this.flip = false;
    }
    
  //!!!WASD + Shift = Run!!!!!//
    
  //W Key + SHIFT 
  if(kb.pressing('w') && kb.pressing('shift') && !this.spriteCollideRock(0,-4.5))
    {
      this.CurrentCharAni = this.RunAni
      this.y -=4.5;
    }
  //A Key + SHIFT
  if(kb.pressing('a') && kb.pressing('shift') && !this.spriteCollideRock(-4.5,0))
    {
      this.CurrentCharAni = this.RunAni
      this.x -=4.5;
      this.flip = true;
    }
  //S Key + SHIFT
  if(kb.pressing('s') && kb.pressing('shift') && !this.spriteCollideRock(0,+4.5))
    {
      this.CurrentCharAni = this.RunAni
      this.y +=4.5;
    }
    //D Key + SHIFT
  if(kb.pressing('d') && kb.pressing('shift') && !this.spriteCollideRock(+4.5,0))
    {
      this.CurrentCharAni = this.RunAni
      this.x +=4.5;
      this.flip = false;
    }
  }
  
  spriteGrab(coin) {
    if(collideRectCircle(this.x-50,this.y-20,this.CollideW,this.CollideH,coin.x,coin.y,coin.d) && coin.visible && !coin.bad) {
      coin.visible = false;
      Count.score += 1;
    }
    if(collideRectCircle(this.x-50,this.y-20,this.CollideW,this.CollideH,coin.x,coin.y,coin.d) && coin.visible && coin.bad) {
      coin.visible = false;
      Count.score -= 1;
      Count.health -= 10;
    }
  }
  spriteCollideRock(x,y) {
    for(i = 0; i < RockArray.length; i++){
      if(collideRectRect(this.x-30 + x,this.y-30 + y,this.CollideW,this.CollideH,RockArray[i].x,RockArray[i].y,RockArray[i].CollideW,RockArray[i].CollideH)){
        return true;
      }
    }
    return false;
  }   
}