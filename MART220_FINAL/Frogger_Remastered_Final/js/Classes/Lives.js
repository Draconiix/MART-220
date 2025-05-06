class Lives{
  constructor(){
    this.Lives = 3;
    
    this.PixFont = loadFont('assets/Fonts/Planes_ValMore.ttf');
    
    this.ExitX = 250;
    this.ExitY = 10;
    this.ExitH = 20;
    this.ExitW = 350;
    this.move = 5;
  }
  drawLives() {
    fill(0,200,100)
    textFont(this.PixFont)
    textSize(36)
    text("Lives: " + this.Lives,30,50)
  }
  drawEXIT() {
    push()
    fill(200,50,50)
    stroke(100,30,0)
    strokeWeight(5)
    textFont(this.PixFont)
    textSize(36);
    textAlign(CENTER)
    text("EXIT",400,35)
    pop()
    //GAME WON SCREEN//
    if(collideRectRect(this.ExitX,this.ExitY,this.ExitW,this.ExitH,Frog.x,Frog.y,Frog.CollideW,Frog.CollideH)){
      push()
      fill(0,200,100)
      stroke(30,100,0)
      strokeWeight(5)
      textFont(this.PixFont)
      textAlign(CENTER)
      text("YOU WON",400,400)
      setTimeout(noLoop(),640)
      pop()
    }
  }
  drawBorders(thickness){
    fill(50);
    // top left border
    rect(0,0,200,thickness);
    // top right border
    rect(600,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height);

    //Wall Collision detection//
    //Left Wall//
    if(Frog.x < 25){
      Frog.x = Frog.x + this.move;
    }
    //Right Wall//
    else if (Frog.x > 775){
      Frog.x = Frog.x - this.move;
    }
    //Bottom Wall//
    else if (Frog.y > 765){
      Frog.y = Frog.y - this.move;
    }
    //Upper Wall//
    else if (Frog.y < 25 && Frog.x > 600 || Frog.y < 25 && Frog.x < 200){
      Frog.y = Frog.y + this.move;
    }
  }
  drawGameOver(){
    if(this.Lives <= 0){
    push()
    fill(200,0,0)
    stroke(100,30,0)
    strokeWeight(5)
    textFont(this.PixFont)
    textAlign(CENTER)
    text("GAME OVER",400,400)
    pop()
    setTimeout(noLoop,0)
    }
  }
}