class food{
    
  // constructor
  constructor(x,y,d)
  {
      //properties
    
      this.x = x;
      this.y = y;
      this.diameter = d;
    
  }
  
  //functions
  drawCircle()
  {
      fill(200,220,0);
      circle(this.x,this.y,this.diameter);
  }
}