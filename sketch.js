let spinner = 0;
let rotator = 0;
let actX = 0;
let actY = 0;
let hyp = 0;
let theta = 0;
let linePoints = [];
let i = 0;
let sliderInner;
let sliderOuter;


function setup(){
  createCanvas(1100,700);
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
  sliderInner = createSlider(0,3,1,.1);
  sliderInner.position(905,125);
  sliderInner.style('width',"100px");
  sliderOuter = createSlider(.5,1.5,1,.1);
  sliderOuter.position(905,325);
  sliderOuter.style('width',"100px");
}

function draw(){
  background(127);
  noStroke();
  let innerSize = sliderInner.value();
  let outerSize = sliderOuter.value();
  if(keyIsDown(ENTER)){
    spinner+=8;
    rotator+=3;
  }
  outerBorder.changeType("circle");
  outerBorder.resize(outerSize);
  outerBorder.display();
  innerShape.changeType("circle");
  innerShape.resize(innerSize);
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
  pop();
  colorsPick();
  strokeWeight(5);
  stroke(244);
  mathy(drawingHoles7.xpos,drawingHoles7.ypos);
  linePoints[i] = createVector(actX,actY);
  if(i>0){
    for(let j =1; j<linePoints.length-1; j++){
      line(linePoints[j].x,linePoints[j].y,linePoints[j+1].x,linePoints[j+1].y);
    }
  }
//  console.log("i=" + i);
  i += 1;

}


function mousePressed(){
  console.log(mouseX,mouseY); // position checker
  console.log(spinner);

}
function mathy(x,y){ // this math is done to revers all of matrix transformations to find the x,y coordinates of any of the holes
  x = x * (innerShape.size);
  y = y * (innerShape.size);
  hyp = sqrt(pow(x,2) + pow(y,2));
  if((x==0) & (y<=0)){
    theta = 90
  }else{
  theta = (atan(y/x));
  }
  if(x<=0){
    theta = theta + 180;
  }
  y = hyp * sin(spinner+ theta);
  x = hyp * cos(spinner+ theta);
  x = (x + innerShape.x);
  y = (y + innerShape.y);
  actX = (x + (width/2));
  actY = (y + (height/2));
}
function colorSquare(x,y,color){
  fill(color);
  rect(x,y,50,50);
}
function colorsPick(){
  noFill();
  strokeWeight(1);
  stroke(0);
  rect(10,70,200,450);
  line(60,70,60,520);
  line(110,70,110,520);
  line(160,70,160,520);
  line(210,70,210,520);
  line(10,120,210,120);
  line(10,170,210,170);
  line(10,220,210,220);
  line(10,270,210,270);
  line(10,320,210,320);
  line(10,370,210,370);
  line(10,420,210,420);
  line(10,470,210,470);
  colorSquare(10,70,0);  //shades
  colorSquare(60,70,85);
  colorSquare(110,70,170);
  colorSquare(160,70,255);
  colorSquare(10,120,"#262378"); // blue
  colorSquare(60,120,"#3632AB");
  colorSquare(110,120,"#423DD1");
  colorSquare(160,120,"#9592F7");
  colorSquare(10,170,"#591E7A"); // purple
  colorSquare(60,170,"#7C2BAB");
  colorSquare(110,170,"#9834D1");
  colorSquare(160,170,"#CF88F7");
  colorSquare(10,220,"#7A1257"); // magenta
  colorSquare(60,220,"#AB1A7A");
  colorSquare(110,220,"#D11F96");
  colorSquare(160,220,"#F76FCA");
  colorSquare(10,270,"#6E0E03"); // red
  colorSquare(60,270,"#9E1405");
  colorSquare(110,270,"#FF0007");
  colorSquare(160,270,"#EB464C");
  colorSquare(10,320,"#702913"); // orange
  colorSquare(60,320,"#9E391B");
  colorSquare(110,320,"#FF5D2B");
  colorSquare(160,320,"#EB9373");
  colorSquare(10,370,"#706113"); // yellow
  colorSquare(60,370,"#9E881B");
  colorSquare(110,370,"#FFDC2B");
  colorSquare(160,370,"#EEE5B6");
  colorSquare(10,420,"#166611"); // green
  colorSquare(60,420,"#1F9419");
  colorSquare(110,420,"#34F52A");
  colorSquare(160,420,"#AFE3AC");
  colorSquare(10,470,"#15664C"); // blue-green / teal
  colorSquare(60,470,"#1F946F");
  colorSquare(110,470,"#33F5B8");
  colorSquare(160,470,"#B6E3D5");
}
