



function setup(){
  createCanvas(800,600);
  background(127);
  roundedOuter = new Outer("round");
  circularOuter = new Outer("circle");
  squareOuter = new Outer("square");
}

function draw(){
  noStroke();
  roundedOuter.resize(.5);
  roundedOuter.display();
  //circularOuter.display();
  //squareOuter.display();
}

function mousePressed(){
  console.log(mouseX,mouseY); // position checker
}
