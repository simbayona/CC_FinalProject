class Holes{

  contructor(){

  }
  display(x,y,color){
    fill(color);
    // fill(this.color);
    ellipse(x,y,this.size,this.size);
    this.xpos = x;
    this.ypos = y;

  }
  draw(color){
  push();
  this.display(this.xpos,this.ypos,color);
  pop();
  }
  resize(new_size){
    this.size = new_size;
  }

  colorize(new_color){
    this.color = new_color;
  }
}
