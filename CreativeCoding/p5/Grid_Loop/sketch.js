function setup() {
  createCanvas(720,720);
  background(255,255,0);
}

function draw() {
  translate(60,60);
  fill(255,0,0);
  strokeWeight(8);
  stroke(0,0,255);
for(var x = 0; x<720,x = x + 360){
  quad(x,0,
    x + 360,0,
    x +360,360,
    x,360);
}


}
