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
let sliderSelector;
let lineColor;
let opacity = 0;


function setup(){
  lineColor =   color(0,0,0);
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
  sliderInner = createSlider(0,3,1,.1); // sliders for the size of the part that spins, the size of the outerborder and which of the 9 holes to choose from
  sliderInner.position(905,125);
  sliderInner.style('width',"100px");
  sliderOuter = createSlider(.5,1.5,1,.1);
  sliderOuter.position(905,325);
  sliderOuter.style('width',"100px");
  sliderSelector = createSlider(0,8,6,1);
  sliderSelector.position(905,525);
  sliderSelector.style("width","100px")
}


function draw(){
  background(127);
  noStroke();
  let innerSize = sliderInner.value();
  let outerSize = sliderOuter.value();
  let drawer = sliderSelector.value();
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
  colorsPallete();
  strokeWeight(5);
  stroke(0);
  if(drawer == 0){
    mathy(drawingHoles0.xpos,drawingHoles0.ypos);
  } if(drawer==1){
    mathy(drawingHoles1.xpos,drawingHoles1.ypos);
  } if(drawer==2){
    mathy(drawingHoles2.xpos,drawingHoles2.ypos);
  } if(drawer==3){
    mathy(drawingHoles3.xpos,drawingHoles3.ypos);
  } if(drawer==4){
    mathy(drawingHoles4.xpos,drawingHoles4.ypos);
  } if(drawer==5){
    mathy(drawingHoles5.xpos,drawingHoles5.ypos);
  } if(drawer==6){
    mathy(drawingHoles6.xpos,drawingHoles6.ypos);
  } if(drawer==7){
    mathy(drawingHoles7.xpos,drawingHoles7.ypos);
  } if(drawer==8){
    mathy(drawingHoles8.xpos,drawingHoles8.ypos);
  }
  fill("#B1FFA4");
  lineColor.setAlpha(opacity);
  rect(10,550,200,100); // on and off toggle button
  stroke(lineColor); // setting the stroke to the color that is clicked on
  if(opacity==255){
    linePoints[i] = createVector(actX,actY); // drawing the line
    if(i>0){
      for(let j =1; j<linePoints.length-1; j++){
        line(linePoints[j].x,linePoints[j].y,linePoints[j+1].x,linePoints[j+1].y);
      }
    }
  i += 1;
  }
}


function mousePressed(){
  console.log(mouseX,mouseY); // position checker
  //checking to see if the mouse is selecting a color
  clicker(10,70,color(0,0,0)); //shades
  clicker(60,70,color(85,85,85));
  clicker(110,70,color(170,170,170));
  clicker(160,70,color(255,255,255));
  clicker(10,120,color(38,35,120)); // blue
  clicker(60,120,color(54,50,171));
  clicker(110,120,color(66,61,209));
  clicker(160,120,color(149,146,257));
  clicker(10,170,color(89,30,122)); // purple
  clicker(60,170,color(128,43,171));
  clicker(110,170,color(152,52,209));
  clicker(160,170,color(207,136,247));
  clicker(10,220,(color(122,18,87))); // magenta
  clicker(60,220,color(171,26,122));
  clicker(110,220,color(209,31,150));
  clicker(160,220,color(247,111,202));
  clicker(10,270,color(110,14,3)); // red
  clicker(60,270,color(158,20,5));
  clicker(110,270,color(255,0,7));
  clicker(160,270,color(235,70,76));
  clicker(10,320,color(112,41,19)); // orange
  clicker(60,320,color(158,57,27));
  clicker(110,320,color(255,93,43));
  clicker(160,320,color(255,147,115));
  clicker(10,370,color(112,97,19)); // yellow
  clicker(60,370,color(158,136,27));
  clicker(110,370,color(255,220,43));
  clicker(160,370,color(238,229,182));
  clicker(10,420,color(22,102,17)); // green
  clicker(60,420,color(31,148,25));
  clicker(110,420,color(52,245,42));
  clicker(160,420,color(175,227,172));
  clicker(10,470,color(21,102,76)); // blue-green / teal
  clicker(60,470,color(31,148,111));
  clicker(110,470,color(51,245,184));
  clicker(160,470,color(182,227,213));
  if((mouseX>10)&(mouseX<210)&(mouseY>550)&(mouseY<650)){
    if(opacity == 0){
      opacity = 255;
    } else{
      opacity = 0;
    }
  }

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
function colorsPallete(){
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
function clicker(lowX,lowY,color){
  if((mouseX>lowX)&(mouseX<(lowX+50))&(mouseY>lowY)&(mouseY<(lowY+50))){
    lineColor = color;
  }

}
