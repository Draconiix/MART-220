//GENERAL VARIABLES//
    let isVisible = true;
    var OpacLight = 25;
    var count = 0;
    
//-------Here's your Rangoon Variables m'lord-----//
  //first crabrangoon//
    var oneCTx = 210;
    var oneCTy = 330;
    var oneCLx = 200;
    var oneCLy = 400;
    var oneCRx = 370;
    var oneCRy = 400;

    var oneDiry = 0.2;
    
  //second crabrangoon//
    var secCTx = 280;
    var secCTy = 310;
    var secCLx = 240;
    var secCLy = 370;
    var secCRx = 430;
    var secCRy = 400;
    
    var secDiry = 0.2;
    
  //third crabrangoon//
    var thiCTx = 400;
    var thiCTy = 300;
    var thiCLx = 300;
    var thiCLy = 350;
    var thiCRx = 470;
    var thiCRy = 400;

    var thiDiry = 0.2;

//--------------------The HANDS---------------------//
    var Lhand;
    var Lhandx = 0;
    var Lhandy = 200;
    
    var Rhand;
    var Rhandx = 570;
    var Rhandy = 200;

    var Lhandspeed = 0.5;
    var Rhandspeed = 0.5;
//-------------------------------------------------//

//PRELOAD//
function preload(){
  lefthand = loadImage('images/LeftHand-Fork.png');
  righthand = loadImage('images/RightHand-Knife.png');
  lobster = loadFont('fonts/Lobster-Regular.ttf');
  
}
//SETUP//
function setup() {
  createCanvas(800, 725);
  setInterval(changeSpeed,1000);
}
//DRAW HERE//
function draw() {
  background(28);
  stroke(80,20,20)
  strokeWeight(1)
  
  table()
  lightswitch()
  plate()
  crabgoon()
  sauce()
  saucespecks()
  light()
  hands()
  changeSpeed()
  nameandtitle()
  
}

//MAIN FUNCTIONS//
function table(){
  fill(120,80,0)
  rect(0,500,50,220)
  rect(750,500,50,220)
  fill(150,100,0)
  rect(0,320,800,220)
}
function lightswitch(){
  fill(220,220,220)
  rect(60,100,100,130)
  fill(240,240,240)
  rect(72,110,75,110)
  rect(95,145,25,40)
  fill(220,220,220)
  circle(107,130,10)
  circle(107,200,10)
  
  if (isVisible){
    fill(250,250,250)
    square(100,150,15)
  }
  else{
    fill(250,250,250)
    square(100,165,15)   
   }
     
}
function plate(){
  fill(500,500,500)
  ellipse(400,450,390,100)
  ellipse(400,400,500,160)
  fill(230,230,230)
  ellipse(400,400,390,100)
}
function crabgoon(){
  fill(200,130,0)
  
  //third crabrangoon//
  triangle(thiCTx,thiCTy,thiCLx,thiCLy,thiCRx,thiCRy)
    thiCTy += thiDiry;
    thiCLy += thiDiry;
    thiCRy += thiDiry;
    if(thiCTy >= 310 || thiCTy <= 300)
       {
        thiDiry *=  -1;
       }
  
  //second crabrangoon//
  triangle(secCTx,secCTy,secCLx,secCLy,secCRx,secCRy)
    secCTy += secDiry;
    secCLy += secDiry;
    secCRy += secDiry;
    if(secCTy >= 320 || secCTy <= 310)
       {
        secDiry *=  -1;
       }
  
  //first crabrangoon//
  triangle(oneCTx,oneCTy,oneCLx,oneCLy,oneCRx,oneCRy)
    oneCTy += oneDiry;
    oneCLy += oneDiry;
    oneCRy += oneDiry;
    if(oneCTy >= 340 || oneCTy <= 330)
       {
        oneDiry *=  -1;
       }
}
function sauce(){
  fill (245,300,300)
  rect(475,370,100,50)
  rect(470,370,110,15)
  
  fill (170,0,0,200)
  rect(475,400,100,20)
}
function saucespecks(){
  fill(250,100,0,200)
  square(500,405,5)
  square(550,410,5)
  
  fill(100,0,0,200)
  square(525,407,7)
  square(480,410,6)
  square(563,403,5)
}
function nameandtitle(){
  fill(200,200,200)
  stroke(50,50,50)
  strokeWeight(3)
  textFont(lobster)
  textSize(34)
  text('Kyla-Ann Heighes',515,700)
  
  fill(300,300,300)
  stroke(150,100,100)
  strokeWeight(3)
  textFont(lobster)
  textSize(36)
  text('Introducing... CrabRangoons',10,50)
}
function light(){
  
  if(isVisible){
    strokeWeight(0)
    fill(250,220,0,OpacLight)
    triangle(400,-50,150,400,640,400)
    ellipse(400,430,600,200)
  }

}
function hands(){
  //LeftHand
  image(lefthand,Lhandx,Lhandy,250,550)
    Lhandy += Lhandspeed;
    if(Lhandy >= height - lefthand.height || Lhandy  <= lefthand.height/2.5)
        {
            Lhandspeed *= -1;
        }
  //RightHand
  image(righthand,Rhandx,Rhandy,250,550)
    Rhandy += Rhandspeed;
    if(Rhandy >= height - righthand.height || Rhandy <= righthand.height/2.5)
        {
           Rhandspeed *= -1;
        }
}

//INTERACTIVITY FUNCTIONS//
function mousePressed(){
  isVisible = !isVisible // toggle light on or off
}

//Makes you excited for the Rangoons//
function changeSpeed(){
  count++;
  if(count == 500)
    {
      Lhandspeed = random(3,5)
      Rhandspeed = Lhandspeed - 1
    }
  else if(count == 1000)
    {
      Lhandspeed = 0.5
      Rhandspeed = 0.5
      count = 0;
    }
}