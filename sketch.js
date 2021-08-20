var sprite1,sprite2

function setup() {
  createCanvas(1000,800);
  sprite1=createSprite(500,400,100,100);
  sprite2=createSprite(700,200,100,100);
  sprite1.debug=true;
  sprite2.debug=true; 
}

function draw() {
  background("pink");
  sprite2.x=World.mouseX
  sprite2.y=World.mouseY
  // console.log(sprite2.x-sprite1.x)
  console.log(sprite2.y-sprite1.y)
  if(sprite2.x-sprite1.x<sprite2.width/2 + sprite1.width/2&&sprite1.x-sprite2.x<sprite1.width/2 + sprite2.width/2
    &&sprite2.y-sprite1.y<sprite2.height/2 + sprite1.height/2&&sprite1.y-sprite2.y<sprite1.height/2 + sprite2.height/2){
     sprite2.shapeColor="red";
     sprite1.width+=1
  }
   else{
     sprite1.shapeColor="blue"
     sprite2.shapeColor="blue"
     sprite1.width=100;
   }
  drawSprites();
}