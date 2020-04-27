class Inner{

  constructor(type){
    this.type = type;
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
    this.outerWidth = 50 * this.size; // these four are just some math to make sure the circles and squares are the correct sizes and in the correct spot
    this.outerHeight = 50 * this.size; // the first two determine the size based on a predetermined max
    this.x = (width/2) - (this.outerWidth/2); // these two help for centering anything based on the rect function
    this.y = (height/2) - (this.outerHeight/2);
  }
  roundInner(){
    this.placement();
    fill("#B1FFA4");
    rect(this.x,this.y,this.outerWidth,this.outerHeight,5);
  }
  circleInner(){
    this.placement();
    fill("#B1FFA4");
    ellipse(width/2,height/2,this.outerWidth,this.outerHeight);
  }
}
