var bullet,wall;
var weight,speed;
var thickness



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(50,200,40,10);
  
  
  wall = createSprite(1200,200,thickness,400);
  wall.shapeColor= "black";
  
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;

  if(hasCollided(bullet,wall))
  {
bullet.velocityX=0;
var damage = ((0.5*weight*speed*speed)/thickness*thickness*thickness);
if(damage>40){
  wall.shapeColor="red";
}
if(damage<50){
wall.shapeColor="green";
}

  }



  drawSprites();


  }

function hasCollided(lbullet, lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;


if(bulletRightEdge>=wallLeftEdge){
return true

}
return false;

}  


  
  
  
  
