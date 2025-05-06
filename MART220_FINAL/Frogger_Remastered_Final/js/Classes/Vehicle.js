class Vehicle{
  constructor(x,y){
    //VARIABLES//
    this.x = x;
    this.y = y;
    this.VehicleSpeed = random(3,5);
    this.Randomization = random(1,100);
    this.Right = random(1,100) < 50;
    
    //Vehicle Variants//
    
    if(this.Randomization < 50){
      //CAR//
      this.vroomsprite = loadImage('assets/images/Vehicles/Car/car1_spr.png')
      this.CollideW = 150;
      this.CollideH = 40;
      this.scale = 2;
    }
    else{
      //TRUCK//
      this.vroomsprite = loadImage('assets/images/Vehicles/Truck/trashmaster.png')
      this.CollideW = 230;
      this.CollideH = 60;
      this.scale = 1.8;
    }
  }
  //Draw those bois in... Function//
  drawVehicle(){
    push()
    translate(this.x,this.y)
    noSmooth()
    scale(this.scale,this.scale)

      if(this.Right){    
      image(this.vroomsprite,0,0)
      this.x += this.VehicleSpeed;
        if(this.x > width){
          this.x = -150
          this.VehicleSpeed = random(3,5);
        }
      }
      else{
      scale(-1,1)
      image(this.vroomsprite,-this.vroomsprite.width,0)
      this.x -= this.VehicleSpeed;
        if(this.x < -250){
          this.x = 1050;
          this.VehicleSpeed = random(3,5)
        }
      }
    pop()
  }
}