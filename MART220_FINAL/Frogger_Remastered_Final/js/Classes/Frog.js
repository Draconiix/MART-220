class froggo{
  
  //Varibles//
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.h = 100;
    this.w = 100;
    
    this.CollideH = 42;
    this.CollideW = 42;
    this.flip = false;
    this.notDead = true;
    
    //*****FROG ANIMATIONS*****//
    //IDLE//
    this.IdleAni = loadAni('assets/images/Frog/Idle/ToxicFrogGreenBrown_Idle.png', 
                           {width: 48, height: 48, frames:8})
    this.IdleAni.frameDelay = 8;
    
    //HOP//
    this.HopAni = loadAni('assets/images/Frog/Hop/ToxicFrogGreenBrown_Hop.png', 
                           {width: 48, height: 48, frames: 8})
    this.HopAni.frameDelay = 4;
    
    //DEATH//
    this.DeathAni = loadAni('assets/images/Frog/Dead/ToxicFrogGreenBrown_Death.png', 
                           {width: 48, height: 48, frames: 8})
    this.DeathAni.frameDelay = 5;
    
    //DEFAULT SETUP ANIMATION//
    this.CurrentFrogAni = this.IdleAni
    //--------------------------//
  }
  
  //FUNCTIONS//
  drawFrog(){
    push()
    
    translate(this.x,this.y)
    noSmooth()
    scale(2,2)
    
    if(this.flip) {
      scale(-1,1)
    }
    
    //Idle
    animation(this.CurrentFrogAni,0,0)

    pop()
  }
  
  frogMove(){
  if(this.notDead){
    this.CurrentFrogAni = this.IdleAni
  }
    //W Key
  if((kb.pressing('w') || kb.pressing('ArrowUp')) && this.notDead)
    {
      this.CurrentFrogAni = this.HopAni
      this.y -=4;
    }
  //A Key
  if((kb.pressing('a') || kb.pressing('ArrowLeft')) && this.notDead)
    {
      this.CurrentFrogAni = this.HopAni
      this.x -=4;
      this.flip = true;
    }
  //S Key
  if((kb.pressing('s') || kb.pressing('ArrowDown')) && this.notDead)
    {
      this.CurrentFrogAni = this.HopAni
      this.y +=4;
    }
  //D Key
  if((kb.pressing('d') || kb.pressing('ArrowRight')) && this.notDead)
    {
      this.CurrentFrogAni = this.HopAni
      this.x +=4;
      this.flip = false;
    }
  }
  
  frogGotHit(){
    for(i = 0; i < VehicleArray.length; i++){
      if(collideRectRect(this.x-40, this.y-40,this.CollideW, this.CollideH, VehicleArray[i].x, VehicleArray[i].y, VehicleArray[i].CollideW, VehicleArray[i].CollideH) && this.notDead){
      this.notDead = false;
      this.CurrentFrogAni = this.DeathAni;
      setTimeout(() => this.frogRevive(),640)
      }
    }
  }
  frogRevive(){
    Score.Lives -= 1;
    if(Score.Lives > 0){
    this.notDead = true;
    this.CurrentFrogAni = this.IdleAni;
    this.x = width/2
    this.y = 720;
    }
    else{
    this.CurrentFrogAni = this.DeathAni
    this.notDead = false;
    }
  }
}