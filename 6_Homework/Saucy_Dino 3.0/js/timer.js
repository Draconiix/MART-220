class timer{
  
  constructor() {
    this.x = 650;
    this.y = 40;
    this.time = 60;
  }
  
  timerDraw() {
    fill(200,200,200)
    textSize(36)
    text("Time: " + round(this.time), this.x, this.y)
    
    if(this.time > 0) {
      this.time -= 1/frameRate();
    }
    else {
      push()
      fill(200,0,0)
      strokeWeight(10)
      stroke(0,0,0)
      text("Game Over",300,250)
      noLoop()
      pop()
    }
  }
  
  Finish(Rex) {
    if(Rex.score >= 20) {
      push()
      strokeWeight(5)
      stroke(0,100,0)
      fill(0,200,0)
      text("You Won!",300,250)
      noLoop()
      pop()
    }
    
  }
}