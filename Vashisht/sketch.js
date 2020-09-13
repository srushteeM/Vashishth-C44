var player,mushroom,mushroomGroup,spider,bullet,bulletGroup;
function setup() {
  createCanvas(500,500);
  player=createSprite(300, 480, 20, 20);


mushroomGroup=new Group();
  for (var i=0;i<45;i++){
    mushroom=createSprite(random(20,470),random(20,340),10,10);
    mushroomGroup.add(mushroom);
  }

  spider=createSprite(500,390,15,15);
  spider.shapeColor="red";
  spider.velocityX=-2;
  spider.velocityY=-2;
  bulletGroup=new Group();
}


function draw() {
  background(0);  
player.x=mouseX;
player.y=mouseY;
  if(player.y<350){
    player.y=350;
  }

  if(spider.y<350){
    spider.velocityY=spider.velocityY*(-1);
  }
  if(spider.y>496){
    spider.velocityY=spider.velocityY*(-1);
  }
  if(spider.x<2){
    spider.velocityX=spider.velocityX*(-1);
  }
  if(spider.x>501){
    spider.velocityX=spider.velocityX*(-1);
  }

  if(keyDown("space")){
    bullet=createSprite(player.x,player.y,3,7);
    bullet.shapeColor="red";
    bullet.velocityY=-10;
    bulletGroup.add(bullet);
  }
  drawSprites();
}
