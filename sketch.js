//creating variables
var gameState;
var controlsI, controls;
var BirdI, Bird1, Bird2, Bird3, Bird4;
var rockI, rock, RockGroup;
var coinI, coin, CoinGroup;
var starI, star, StarGroup;
var bg1I;
var leftI, left;
var rightI, right;
var sbI, sb;
var SCORE=0;
var borderI, border;

function preload() {

//loading images
controlsI=loadImage("cockpit.png");
BirdI=loadImage("bird 2.png");
rockI=loadImage("rock 1.png");
starI=loadImage("Star.png");
coinI=loadImage("Coin.png");
bgI=loadImage("mountain.jpg");
leftI=loadImage("leftHand.png");
rightI=loadImage("rightHand.png");
sbI=loadImage("Speech box.png");
borderI=loadImage("Border.png");

}

function setup() {
createCanvas(1365,765);
  
//creating sprites
controls = createSprite(width/2, 700, 0, 0);
controls.addImage(controlsI);
controls.scale = 0.3

left = createSprite(520, 700, 0, 0);
left.addImage(leftI);
left.scale = 0.6

right = createSprite(830, 700, 0, 0);
right.addImage(rightI);
right.scale = 0.6

border = createSprite(130, 50, 0, 0);
border.addImage(borderI)
border.scale = 0.3

Bird1 = createSprite(100, 100, 0, 0);
Bird1.addImage(BirdI);
Bird1.scale = 0.07
Bird1.velocityX = 0.5

Bird2 = createSprite(900, 100, 0, 0);
Bird2.addImage(BirdI);
Bird2.scale = 0.07
Bird2.velocityX = 0.5

Bird3 = createSprite(500, 40, 0, 0);
Bird3.addImage(BirdI);
Bird3.scale = 0.07
Bird3.velocityX = 0.5

CoinGroup = new Group();
StarGroup = new Group();
RockGroup = new Group();
}

function draw() {
background(bgI);  

//making the plane move right
if (keyDown(RIGHT_ARROW)){
  controls.x = controls.x + 10
  right.x = right.x + 10
  left.x = left.x + 10
}

//making the plane move left
if (keyDown(LEFT_ARROW)){
  controls.x = controls.x - 10
  right.x = right.x - 10
  left.x = left.x - 10
}

fill("black")
textSize(30)
text("Score :" + SCORE, 70,60)

fill("red")
textSize(25)
text("1. Catch the coins to earn 1 point", 260, 40)
text("2. Catch the stars to earn 5 points", 550, 65)
text("3. If you touch the rocks, you will lose 3 points", 820, 40)

coins();
stars();
rocks();

//destoying coins ans stars after they are touched
if (CoinGroup.isTouching(controls)){
  CoinGroup.destroyEach();
  SCORE=SCORE+1
}
if (StarGroup.isTouching(controls)){
  StarGroup.destroyEach();
  SCORE=SCORE+5
}
if (RockGroup.isTouching(controls)){
  RockGroup.destroyEach();
  SCORE=SCORE - 3
}





drawSprites();
}

function coins(){
//creating continuous coins
if (frameCount % 80 === 0) {
  coin = createSprite(600,100,40,10);
  coin.x = Math.round(random(100,1300));
  coin.addImage(coinI);
  coin.scale = 0.03 ;
  coin.velocityY = 3;
  coin.lifetime = 200;
 
  CoinGroup.add(coin);
 }
}

function stars(){
//creating continuous stars
if (frameCount % 300 === 0) {
  star = createSprite(600,100,40,10);
  star.x = Math.round(random(100,1300));
  star.addImage(starI);
  star.scale = 0.07 ;
  star.velocityY = 3;
  star.lifetime = 200;

  StarGroup.add(star);
  }
}

function rocks(){
  //creating continuous stars
  if (frameCount % 150 === 0) {
    rock = createSprite(600,100,40,10);
    rock.x = Math.round(random(100,1300));
    rock.addImage(rockI);
    rock.scale = 0.07 ;
    rock.velocityY = 3;
    rock.lifetime = 200;
  
    RockGroup.add(rock);
    }
  }