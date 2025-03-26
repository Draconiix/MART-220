class score {
  
  constructor(){
    
    this.score = 0;
    this.health = 100;
    this.time = 60;
    
    this.PixFont = loadFont('./assets/fonts/Planes_ValMore.ttf')
    
  }
  
  drawScore() {
    fill(200,200,200)
    textFont(this.PixFont)
    textSize(36)
    text("Score: " + this.score,10,40)
  }
  
  drawHealth() {

    //Health Score
    fill(100,200,100)
    textFont(this.PixFont)
    textSize(36)
    text("Health: " + this.health,300,40)
    
  }
  drawTime() {
    if(this.time > 0) {
      this.time -= 1/frameRate();
    }
  }
  
  finish(){
    if(this.score >= 10){
      fill(0,200,0)
      textFont(this.PixFont)
      text("YOU WON!",300,250)
      noLoop()
       }
    if(this.health <= 0){
      fill(200,0,0)
      textFont(this.PixFont)
      text("GAME OVER",300,250)
      noLoop()
    }
    
  }
}