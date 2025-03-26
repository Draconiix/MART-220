class Rock{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    
    this.CollideW = 75;
    this.CollideH = 35;
    
    this.RockOne = loadImage('./assets/images/Rock/Rock1.png')
    this.RockTwo = loadImage('./assets/images/Rock/Rock2.png')
    
  }
  
  drawRock(){
    push()
    
    translate(this.x,this.y)
    noSmooth()
    scale(5,5)
    
    image(this.RockTwo,0,0)
    
    pop()
  }
 
}