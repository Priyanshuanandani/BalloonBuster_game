var blueballoon, blueballoonImage;
var redballoon, redballoonImage;
var greenballoon, greenballoonImage;
var pinkballoon, pinkballoonImage;
var bow, bowImage;
var background, backgroundImage;
var arrow, arrowImage;
var score;





function preload() {

  backgroundImage = loadImage("background0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  redballoonImage = loadImage("red_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png")

}

function setup() {

  createCanvas(400, 400);
  background = createSprite(0, 0, 400, 400);
  background.addImage("background", backgroundImage);
  background.velocityX = -4;
  background.scale = 2.5;
  bow = createSprite(385, 180, 20, 20);
  bow.addImage("bow", bowImage);
  bow.scale = 1;  
  
  score = 0;
  
}

function draw() {
  
  

  if (background.x < 0) {
    background.x = background.width / 2;
  }
  

  bow.y = World.mouseY;

var select_balloon = Math.round(random(1, 4));
  console.log(select_balloon);

  if (World.frameCount % 80 === 0) {
    if (select_balloon === 1) {
      redBalloon();
    } else if (select_balloon === 2) {
      greenBalloon();
    } else if (select_balloon === 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

 if (keyDown("space")) {
   
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y;
    
  }
  
  createEdgeSprites();
  drawSprites();

  function createArrow() {
    
    arrow = createSprite(360, 100, 5, 10);
    arrow.velocityX = -6;
    arrow.scale = 0.3;
    arrow.lifetime = 70;
    return arrow;
    
  }

  function redBalloon() {
    
    var red = createSprite(0, Math.round(random(20, 370)), 10,10);
    red.addImage(redballoonImage);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;
    
  }

  function greenBalloon() {
    
    var green = createSprite(0, Math.round(random(20, 370)), 10,10);
    green.addImage(greenballoonImage);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    
  }

  function blueBalloon() {
    
    var blue = createSprite(0, Math.round(random(20, 370)), 10,10);
    blue.addImage(blueballoonImage);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    
  }

  function pinkBalloon() {
    
    var pink = createSprite(0, Math.round(random(20, 370)), 10,10);
    pink.addImage(pinkballoonImage);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1.3;
  }
  textsize = 15;
  fill("black");
  text("Score :"+ score,270,30);
}