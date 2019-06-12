function FlowerVehicle(x, y) {
 this.pos = createVector(x, y);
 this.vel = createVector(0, 0);
 this.maxSpeed = 0.5;
 this.flower = new Flower();
 this.wind = createVector(1, 0);
 var g = createVector(0, 0.05);
 this.acc = createVector(0, 0);
 this.dead = false;

 this.run = function() {
  this.update();
  this.display();
 };

 this.update = function() {
  // this.acc.add(this.wind);
  this.vel.add(this.acc);
  this.vel.limit(this.maxSpeed);
  this.pos.add(this.vel);
 };

 this.display = function() {
  this.flower.display(this.pos);
 };

 this.applyForce = function() {
  var force = p5.Vector.mult(g, this.flower.mass);
  force.add(this.wind);
  this.acc = p5.Vector.div(force, this.flower.mass);
  console.log(this.wind);
   // this.acc = p5.Vector.mult(g, this.flower.mass);
  // if (mouseIsPressed) {
  //  if ((mouseX-pmouseX)>=0) {
   //  this.wind = createVector(1, 0);
   // }else{
   //   this.wind = createVector(-1, 0);
   //  }
   // this.acc.add(this.wind);
   // }
  
 };

 this.border = function() {
  if (this.pos.x < 0) {
   this.dead = true;
  }
  if (this.pos.x > width) {
   this.dead = true;
  }
  if (this.pos.y > width) {
   this.dead = true;
  }
 }
}