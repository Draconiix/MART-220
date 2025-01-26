function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(50);
  table()
  plate()
  crabgoon()
  sauce()
}
function table(){
  fill(120,80,0)
  rect(0,500,50,220)
  rect(750,500,50,220)
  fill(150,100,0)
  rect(0,320,800,220)
}
function plate(){
  fill(500,500,500)
  ellipse(400,450,390,100)
  ellipse(400,400,500,160)
  ellipse(400,400,390,100)
}
function crabgoon(){
  fill(200,130,0)
  triangle(400,300,300,350,470,400)
  triangle(280,310,240,370,430,400)
  triangle(210,330,200,400,370,400)
  
}
function sauce(){
  fill (245,300,300)
  rect(475,370,100,50)
  rect(470,370,110,15)
  fill (170,0,0)
  rect(475,400,100,20)
  fill(250,100,0)
  square(500,405,5)
  square(550,410,5)
  fill(100,0,0)
  square(525,407,7)
  square(480,410,6)
  square(563,403,5)
}
