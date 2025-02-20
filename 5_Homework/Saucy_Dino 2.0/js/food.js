class food{
    
  // constructor
  constructor(x,y)
  {
      //properties
    
      this.x = x;
      this.y = y;
      this.h = 50;
      this.w = 100;
      this.visible = true;
    
  }
  
  //functions
  drawSauce()
  {
    push()
    
    scale(0.5)
    translate(this.x,this.y)
    
    if(this.visible) {
      fill (245,300,300)
      rect(this.x,this.y,this.w,this.h)
      rect(this.x-5,this.y,this.w+10,15)
  
      fill (170,0,0,200)
      rect(this.x,this.y+30,this.w,20)
    }
    pop()
  }
}