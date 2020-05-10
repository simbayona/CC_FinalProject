let spinner = 0
let rotator = 0



function setup(){
  createCanvas(700,700);
  background(127);
  angleMode(DEGREES);
  outerBorder = new Outer();
  innerShape = new Inner();
  drawingHoles0 = new Holes();
  drawingHoles0.resize(4);
  drawingHoles1 = new Holes();
  drawingHoles1.resize(4);
  drawingHoles2 = new Holes();
  drawingHoles2.resize(4);
  drawingHoles3 = new Holes();
  drawingHoles3.resize(4);
  drawingHoles4 = new Holes();
  drawingHoles4.resize(4);
  drawingHoles5 = new Holes();
  drawingHoles5.resize(4);
  drawingHoles6 = new Holes();
  drawingHoles6.resize(4);
  drawingHoles7 = new Holes();
  drawingHoles7.resize(4);
  drawingHoles8 = new Holes();
  drawingHoles8.resize(4);
}

function draw(){
  noStroke();
  if(keyIsDown(ENTER)){
    spinner+=8;
    rotator+=3;
  }
  outerBorder.changeType("circle");
  outerBorder.resize(1);
  outerBorder.display();
  drawingHoles5.colorize(255);
  innerShape.changeType("circle");
  innerShape.resize(3);
  innerShape.display();

}

function mousePressed(){
  console.log(mouseX,mouseY); // position checker
  console.log(spinner);
}
