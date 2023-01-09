function setup() {
  createCanvas(720,720);
  background(255,255,0);
}

function draw() {
  fill(255,0,0);
  strokeWeight(1);

for(var x = 0; x<720,x = x + 360){
  quad(x,0,
    x + 360,0,
    x +360,360,
    x,360);
}


}
