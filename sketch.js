var movingRect
var fixedRect


function setup() {
 createCanvas(800,900);
 movingRect=createSprite(400,450,100,80)
 movingRect.shapeColor="yellow";
 fixedRect=createSprite(600,500,100,90)
 fixedRect.shapeColor="pink"; 
}

function draw() {
  background("red");
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
    movingRect.shapeColor="black";
    fixedRect.shapeColor="black";
  }
    else{
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="pink";
    }
    
  


  drawSprites();
}