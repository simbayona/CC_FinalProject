



function setup(){
  createCanvas(800,600);
  background(127);
  roundedOuter = new Outer("round");
  circularOuter = new Outer("circle");
  squareOuter = new Outer("square");
  roundedInner = new Inner("round");
}

function draw(){
  noStroke();
  roundedOuter.resize(1);
  roundedOuter.display();
  //circularOuter.resize(1):
  //circularOuter.display();
  //squareOuter.resize(1);
  //squareOuter.display();
  roundedInner.resize(1);
  roundedInner.display();
}

function mousePressed(){
  console.log(mouseX,mouseY); // position checker
}
