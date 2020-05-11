class Outer {

 constructor(){
 }

 display(){ // display just chooses which one of the drawer methods to pick from depending on the type
  if(this.type == "round"){
    this.roundOuter();
  }
  if(this.type == "circle"){
    this.circleOuter();
  }
  if(this.type == "square"){
    this.squareOuter();
  }
 }
 resize(new_size){ // this method will let changing the size of the outer border much easier
   this.size = new_size;
 }
 placement(){
   this.outerWidth = 400 * this.size; // these four are just some math to make sure the circles and squares are the correct sizes and in the correct spot
   this.outerHeight = 400 * this.size; // the first two determine the size based on a predetermined max
   this.x = ((width/2) -200) - (this.outerWidth/2); // these two help for centering anything based on the rect function
   this.y = ((height/2)-200) - (this.outerHeight/2);
 }
 changeType(new_type){
   this.type = new_type;
 }
 // roundOuter(){
 //   this.placement();
 //   fill("#B1FFA4");
 //   rect(this.x,this.y,this.outerWidth,this.outerHeight,50);
 //   fill(127);
 //   rect(this.x+10,this.y+10,this.outerWidth-20,this.outerHeight-20,50);
 // }
 circleOuter(){
   this.placement();
   // fill("#B1FFA4");
   noFill();
   stroke("#B1FFA4");
   ellipse((width/2),(height/2),this.outerWidth,this.outerHeight);
   fill(127);
   ellipse((width/2),(height/2),this.outerWidth-15,this.outerHeight-15);
 }
//  squareOuter(){
//    this.placement();
//    fill("#B1FFA4");
//    rect(this.x,this.y,this.outerWidth,this.outerHeight);
//    fill(127);
//    rect(this.x+10,this.y+10,this.outerWidth-20,this.outerHeight-20);
//  }
}
