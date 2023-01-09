function setup() {
  createCanvas(windowWidth,windowWidth);
  background(255,255,0);
}

function draw() {
  fill(0,255,255);
  strokeWeight(1);
  var num = 4;
  var sideLen = windowWidth/num;
for (var y = 0; y <windowWidth;y += sideLen){
  for(var x = 0; x<windowWidth;x += sideLen){
    quad(x,y,
      x + sideLen,y,
      x +sideLen,y+ sideLen,
      x, y + sideLen);
  }
}

}
