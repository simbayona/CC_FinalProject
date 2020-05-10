class Holes{

  contructor(size){
  }
  display(x,y,color){
    fill(color);
    ellipse(x,y,this.size,this.size);
  }
  resize(new_size){ // this method will let changing the size of the innercirlce much easier
    this.size = new_size;
  }
}
