function preload(){
  Waffle = loadImage("./Textures/Waffle Pattern.jpg");
  iceCream  = loadImage("./Textures/VanillaIceCream.jpg");
  myFont = loadFont('./Assets/Migae.otf')
}
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  
}

function draw() {
  background(30);
  Title();
  WaffleCone();
  
}

function WaffleCone(){
  rotateWithFrameCount()
  push()
  pointLight(200,150,120,500,500,50,500)
  texture(Waffle);


  cylinder(40,100,25)
  translate(0,-60)
  cylinder(50,35,25)
  translate(0,-10)
  cylinder(55,15,25)
  translate(0,125)
  cylinder(30,10,25)
  pop()
  
  IceCream();
  
}
function IceCream(){
  push()
  translate(0,-100)
  pointLight(255,235,150,500,500,50,500)
  texture(iceCream);

  sphere(53,100,45)
  translate(0,-55)
  sphere(47,100,45)
  pop()
}
function rotateWithFrameCount() {
  rotateZ(frameCount/15);
  rotateX(frameCount/15);
  rotateY(frameCount/15);
}
function Title(){
  textFont(myFont)
  textSize(36)
  text("~ICECREAM~",-100,-200)
  text("~FOREVER~", -90, 100)
  textSize(20)
  text("By Kyla-ann Heighes",-95,140)
}