class Coin{
    
  // constructor
  constructor(x,y)
  {
      //properties
    
      this.x = x;
      this.y = y;
      this.d = 40;
      this.visible = true;
      this.bad = random(1,10) > 7;
  }
  
  //functions
  drawCoin()
  {
    push()
    
   
    translate(this.x,this.y)
    scale(0.5)
    
    //Good coin
    if(this.visible && !this.bad) {
      fill (color = 'yellow')
      circle(0,0,this.d)
      
      fill (200,150,50)
      circle(0,0,20)
    }
    //Bad coin
    if(this.visible && this.bad) {
      fill (color = 'red')
      circle(0,0,this.d)
      
      fill(150,0,0)
      circle(0,0,20)
    }
    pop()
  }
}