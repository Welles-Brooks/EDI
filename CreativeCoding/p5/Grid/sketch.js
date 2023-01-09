function setup() {
  createCanvas(720,720);
  background(255,255,0);
}

function draw() {
  translate(60,60);
  fill(255,0,0);
  strokeWeight(8);
  stroke(0,0,255);
  quad(0,0,300,0,300,300,0,300);
  quad(300,0,600,0,600,300,300,300);
  quad(0,300,300,300,300,600,0,600);
  quad(300,3000,600,300,600,600,300,600);
}
