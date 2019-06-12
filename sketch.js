var vehicles = [];
var vehicles2 = [];
var wind;

function preload(){
 bgMusic = loadSound('assets/spring.mp3');
}

function setup() {
 text = createP("Drag mouse to generate new leaves");
 text.position(10,20);
 text = createP("Click mouse to generate new flowers");
 text.position(10,40);
 bgMusic.play();

 createCanvas(windowWidth, windowHeight);
 for (var i = 0; i < 10; i++) {
  vehicles.push(new FlowerVehicle(random(width), random(height / 2)));
 }
}

function draw() {
 background(230, 240, 255, 50);
 wind = createVector(mouseX-pmouseX, mouseY-pmouseY);
 if(frameCount%60 == 0){
   for (var i = 0; i < 3; i++) {
     vehicles.push(new FlowerVehicle(random(width), -30));
   }
 }

 for (var i = 0; i < vehicles.length; i++) {
  vehicles[i].applyForce();
  vehicles[i].run();
  vehicles[i].border();
   if(vehicles[i].dead == true){
   	vehicles.splice(i,1);
   }
 }

 if (vehicles2.length > 0) {
  for (var i = 0; i < vehicles2.length; i++) {
   vehicles2[i].run();
   vehicles2[i].applyBehaviors(vehicles2[i], wind);
  }
 }

}

function mouseClicked() {
 vehicles.push(new FlowerVehicle(mouseX, mouseY));
}

function mouseDragged() {
 vehicles2.push(new LeafVehicle(mouseX, mouseY));
}
