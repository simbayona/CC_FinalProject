let rounded;
let circular;




function setup(){
  createCanvas(800,600);
  background(127);
  rounded = new Outer("round",1);
  circular = new Outer("circle",1);
  square = new Outer("square",1);
}

function draw(){
  noStroke();
  rounded.display();
  //circular.display();
  //square.display();
}

function mousePressed(){
  console.log(mouseX,mouseY); // position checker
}

// class Outer {
//
//  constructor(type, size){
//  this.type = type; // this type variable lets me chose which one of the outer shapes I want to have
//  this.size = size; // this size variable will let the user pick how big they want the outer limit to be
//  this.outerWidth = 400 * this.size; // these four are just some math to make sure the circles and squares are the correct sizes and in the correct spot
//  this.outerHeight = 400 * this.size;
//  this.x = (width/2) - (this.outerWidth/2);
//  this.y = (height/2) - (this.outerHeight/2);
//  }
//
//  display(){
//   if(this.type == "round"){
//     this.roundOuter();
//   }
//   if(this.type == "circle"){
//     this.circleOuter();
//   }
//   if(this.type == "square"){
//     this.squareOuter();
//   }
//  }
//
//  roundOuter(){
//    fill("#B1FFA4");
//    rect(this.x,this.y,this.outerWidth,this.outerHeight,50);
//    fill(127);
//    rect(this.x+10,this.y+10,this.outerWidth-20,this.outerHeight-20,50);
//  }
//  circleOuter(){
//    fill("#B1FFA4");
//    ellipse(width/2,height/2,this.outerWidth,this.outerHeight);
//    fill(127);
//    ellipse(width/2,height/2,this.outerWidth-15,this.outerHeight-15);
//  }
//  squareOuter(){
//    fill("#B1FFA4");
//    rect(this.x,this.y,this.outerWidth,this.outerHeight);
//    fill(127);
//    rect(this.x+10,this.y+10,this.outerWidth-20,this.outerHeight-20);
//  }
// }
