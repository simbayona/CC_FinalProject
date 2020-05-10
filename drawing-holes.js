class Holes{

  contructor(){

  }
  display(x,y){
    fill(127);
    // fill(this.color);
    ellipse(x,y,this.size,this.size);
  }
  resize(new_size){ // this method will let changing the size of the innercirlce much easier
    this.size = new_size;
  }

  colorize(new_color){
    this.color = new_color;
  }
}
