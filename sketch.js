var sea,seaimage,ship,shipimage
function preload(){
seaimage=loadImage("sea.png");
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,50,50)
  sea.addImage(seaimage);
  sea.scale=0.3
  ship=createSprite(220,200,50,50)
  ship.addAnimation("ship",shipimage)
  ship.scale=0.3
  ship.velocityX=0.5;
  ship.velocityY=-0.4
}

function draw() {
  background("blue");
 drawSprites();
}
