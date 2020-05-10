class Inner{

  constructor(){
  }
  display(){ // display just chooses which one of the drawer methods to pick from depending on the type

   if(this.type == "round"){
     this.roundInner();
   }
   if(this.type == "circle"){
     this.circleInner();
   }
  }
  resize(new_size){ // this method will let changing the size of the innercirlce much easier
    this.size = new_size;
  }
  placement(){
    this.x = (((outerBorder.outerWidth-20)/2) - (this.outerWidth/2)) * cos(rotator);
    this.y = (((outerBorder.outerHeight-20)/2) - (this.outerHeight/2)) * sin(rotator);
    this.outerWidth = 50 * this.size; // these four are just some math to make sure the circles and squares are the correct sizes and in the correct spot
    this.outerHeight = 50 * this.size; // the first two determine the size based on a predetermined max
  }
  changeType(new_type){
    this.type = new_type;
  }
  roundInner(){
    this.placement();
    push();
    translate(width/2,height/2);
    rotate(spinner);
    fill("#B1FFA4");
    rect(-this.outerWidth/2,-this.outerHeight/2,this.outerWidth,this.outerHeight,5);
    drawingHoles.display(0,0,127);
    drawingHoles.display(4,4,127);
    drawingHoles.display(-1,8,127);
    drawingHoles.display(-6,6,127);
    drawingHoles.display(-10,0,127);
    drawingHoles.display(-9,-9,127);
    drawingHoles.display(-5,-15,127);
    drawingHoles.display(0,-20,127);
    drawingHoles.display(8,-22,127);
    pop();
  }
  circleInner(){
    this.placement();
    push();
    translate(width/2,height/2);
    fill("#B1FFA4");
    ellipse(this.x,this.y,this.outerWidth,this.outerHeight);
    translate(this.x,this.y);
    rotate(spinner);
    drawingHoles.display(0,0,127);
    drawingHoles.display(4,4,127);
    drawingHoles.display(-1,8,127);
    drawingHoles.display(-6,6,127);
    drawingHoles.display(-10,0,127);
    drawingHoles.display(-9,-9,127);
    drawingHoles.display(-5,-15,127);
    drawingHoles.display(0,-20,127);
    drawingHoles.display(8,-22,127);
    pop();
  }
}
