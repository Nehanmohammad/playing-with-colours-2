var fixedRect, movingRect;

var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(2000,2000);
  fixedRect = createSprite(500, 250, 100, 100);
  movingRect = createSprite(900,250,100,100);
  fixedRect.shapeColor = "darkred";
  movingRect.shapeColor = "darkred";

  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor = "gold";

  rect2 = createSprite(200,100,50,50);
  rect2.shapeColor = "red";

  rect3 = createSprite(300,100,50,50);
  rect3.shapeColor = "LIGHTYELLOW";

  rect4 = createSprite(400,100,50,50);
  rect4.shapeColor = "YELLOW";

 // fixedRect.velocityX = +5;
  //movingRect.velocityX = -5;
}


function draw() {
  background('white');

  //Text("x :" + World.mouseX + ', y:' + World.mouseY,World.mouseX,World.mouseY)

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
if(isTouching(movingRect,rect3)){
  movingRect.shapeColor = "lightblue";
  rect3.shapeColor = "darkblue";
}
else{
  movingRect.shapeColor = "darkred";
  rect3.shapeColor = "lightyellow"
}
if(isTouching(movingRect,rect1)){
  movingRect.shapeColor = "darkblue";
  rect1.shapeColor = "blue";
  rect2.shapeColor = 'red'
}
else{
  movingRect.shapeColor = "darkred";
  rect1.shapeColor = "lightyellow"
}

  

  //fixedRect.debug = true ;
  //movingRect.debug = true ;

  drawSprites();
}

