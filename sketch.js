let spinner = 0



function setup(){
  createCanvas(700,700);
  background(127);
  angleMode(DEGREES);
  roundedOuter = new Outer("round");
  circularOuter = new Outer("circle");
  squareOuter = new Outer("square");
  roundedInner = new Inner("round");
  circleInner = new Inner("circle");
}

function draw(){
  noStroke();
  if(keyIsDown(ENTER)){
    spinner+=8;
  }
  roundedOuter.resize(1);
  roundedOuter.display();
  //circularOuter.resize(1):
  //circularOuter.display();
  //squareOuter.resize(1);
  //squareOuter.display();
  roundedInner.resize(1);
  roundedInner.display();
  // circleInner.resize(1);
  // circleInner.display();
}

function mousePressed(){
  console.log(mouseX,mouseY); // position checker
  console.log(spinner);
}
