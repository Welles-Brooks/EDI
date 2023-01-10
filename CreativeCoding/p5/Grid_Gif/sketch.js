 let gif;

 function preload(){

   gif = loadImage ('assets/Dancing_Yoshi.gif');
 }

function setup() {
  createCanvas(windowWidth,windowWidth);
  background(255,255,0);
}

function draw() {
  fill(0,255,255);
  strokeWeight(1);
  var num = 20;
  var sideLen = windowWidth/num;

  translate(-150,-150);//give design bleed effect

for (var y = 0; y < 2 * windowWidth;y += sideLen){
  for(var x = 0; x< 2 * windowWidth;x += sideLen){
      image (gif,x,y,sideLen,sideLen);
  }
}

}

function windowResized (){// This resize and refreshes the design with broswer
  resizeCanvas (windowWidth,windowHeight);
}
