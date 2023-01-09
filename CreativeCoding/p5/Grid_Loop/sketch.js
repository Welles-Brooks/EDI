function setup() {
  createCanvas(windowWidth,windowWidth);
  background(255,255,0);
}

function draw() {
  fill(255,0,0);
  strokeWeight(1);
  var num = 2;
  var sideLen = windowWidth/num;
for (var y = 0; y <windowWidth;y += 360){
  for(var x = 0; x<windowWidth;x += 360){
    quad(x,y,
      x + sideLen,y,
      x +sideLen,y+ sideLen,
      x, y + sideLen);
  }
}

}
