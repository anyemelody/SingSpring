function Flower() {
 var luck = random(2);
 if (luck > 1) {
  this.nbPetals = 1;
 } else {
  this.nbPetals = 5;
 }
 this.petalLength = random(10, 36);
 this.mass = this.petalLength;
 this.heartRadius = random(3, 5);
 this.XfactorUp = random(0.6, 0.8); //the thickness of petal
 this.YfactorUp = random(0.1, 0.3); //round angle
 this.XfactorDown = random(0.1, 0.3);
 this.YfactorDown = random(0.1, 0.5);
 this.theta = random(TWO_PI);
 this.thetaSpeed = random(-0.03,0.03);
 this.hasTouchGround = false;
 this.saturation = random(100);

 this.display = function(pos) {
  this.theta += this.thetaSpeed;
  push();
  translate(pos.x, pos.y);
  rotate(this.theta);
  noStroke();
  colorMode(HSB,360,100,100,100);
  fill(340,this.saturation,100,this.petalLength*8);
  // fill(255, 170, 200, 80);
  for (var i = 0; i < this.nbPetals; i++) {
   rotate(TWO_PI / this.nbPetals);
   beginShape();
   vertex(0, 0);
   bezierVertex(-this.petalLength * this.XfactorDown, -this.petalLength * this.YfactorDown, -this.petalLength * (1 - this.XfactorUp), -this.petalLength * (1 - this.YfactorUp), 0, -this.petalLength);
   bezierVertex(this.petalLength * (1 - this.XfactorUp), -this.petalLength * (1 - this.YfactorUp), this.petalLength * this.XfactorDown, -this.petalLength * this.YfactorDown, 0, 0);
   endShape();
  }
  pop();
 }
}