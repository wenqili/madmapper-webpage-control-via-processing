void stateSetup(){
  //background(x,0,255);
}

void stateDraw(){
  float a = map(y,0,800,0,255);
  float b = map(x,0,800,0,255);
  background(a,b,255);

}