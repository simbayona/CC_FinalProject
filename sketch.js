let spinner = 0
let rotator = 0



function setup(){
  createCanvas(700,700);
  background(127);
  angleMode(DEGREES);
  innerShape = new Inner();
  drawingHoles = new Holes();
  drawingHoles.resize(4);
  outerBorder = new Outer();
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
  innerShape.changeType("circle");
  innerShape.resize(1);
  innerShape.display();
}

function mousePressed(){
  console.log(mouseX,mouseY); // position checker
  console.log(spinner);
}
