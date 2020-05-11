let spinner = 0;
let rotator = 0;
let actX = 0;
let actY = 0;
let hyp = 0;
let theta = 0;


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
  innerShape.changeType("circle");
  innerShape.resize(1);
  innerShape.display();
  push();
  translate(width/2,height/2);
  translate(innerShape.x,innerShape.y);
  rotate(spinner);
  scale(innerShape.size);
  drawingHoles0.display(0,0,127);
  drawingHoles1.display(4,4,127);
  drawingHoles2.display(-1,8,127);
  drawingHoles3.display(-6,6,127);
  drawingHoles4.display(-10,0,127);
  drawingHoles5.display(-9,-9,127);
  drawingHoles6.display(-5,-15,127);
  drawingHoles7.display(0,-20,127);
  drawingHoles8.display(8,-22,127);
  mathy(drawingHoles7.xpos,drawingHoles7.ypos);
  pop();
  fill(255);
  ellipse(actX,actY,5,5);

}

function mousePressed(){
  console.log(mouseX,mouseY); // position checker
  console.log(spinner);
}
function mathy(x,y){
  x = x * (pow((innerShape.size),-1));
  y = y * (pow((innerShape.size),-1));
  hyp = sqrt(pow(x,2) + pow(y,2));
  console.log(x,y,hyp);
  if((x==0) & (y<=0)){
    theta = 90
  }else{
  theta = (atan(y/x));
  }
  if((x<0) || (y<0)){
    theta = theta + 180;
  }
  console.log(theta);
  y = hyp * sin(spinner+ theta);
  x = hyp * cos(spinner+ theta);
  x = (x + innerShape.x);
  y = (y + innerShape.y);
  actX = (x + (width/2));
  actY = (y + (height/2));
  //console.log(actX,actY);
}
