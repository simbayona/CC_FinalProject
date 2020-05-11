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
  roundInner(){ // originally my plan was to have multiple shapes so this is the basic setup for a rounded square
    this.placement();
    push();
    translate(width/2,height/2);
    rotate(spinner);
    fill("#B1FFA4");
    rect(-this.outerWidth/2,-this.outerHeight/2,this.outerWidth,this.outerHeight,5);
    scale(this.size);
    drawingHoles0.display(0,0);
    drawingHoles1.display(4,4);
    drawingHoles2.display(-1,8);
    drawingHoles3.display(-6,6);
    drawingHoles4.display(-10,0);
    drawingHoles5.display(-9,-9);
    drawingHoles6.display(-5,-15);
    drawingHoles7.display(0,-20);
    drawingHoles8.display(8,-22);
    pop();

  }
  circleInner(){
    noStroke();
    this.placement();
    push();
    translate((width/2),height/2);
    fill("#B1FFA4");
    ellipse(this.x,this.y,this.outerWidth,this.outerHeight);
    pop();
  }
}
