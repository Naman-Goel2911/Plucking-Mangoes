
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree, treeSprite;
var boy, boySprite;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var catapult;

function preload()
{ 
	boy = loadImage("PluckingMangoes/boy.png");

	tree = loadImage("PluckingMangoes/tree.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750, 690);

	treeSprite = createSprite(1100, 360, 500, 700);
	treeSprite.addImage(tree);
	treeSprite.scale = 0.53;

	boySprite = createSprite(250, 610, 100, 200);
	boySprite.addImage(boy);
	boySprite.scale = 0.14;

	stone = new Stone(180, 540, 20);

	mango2 = new Mango(950, 250, 30);
	mango3 = new Mango(1000, 200, 30);
	mango4 = new Mango(1000, 300, 30);

	mango6 = new Mango(1050, 130, 30);
	mango7 = new Mango(1100, 300, 30);
	mango8 = new Mango(1100, 200, 30);

	mango1 = new Mango(1200, 200, 30);
	mango5 = new Mango(1150, 100, 30);
	mango10 = new Mango(1200, 300, 30);

	mango9 = new Mango(1300, 260, 30);

	catapult = new Catapult(stone.body, {x: 180, y: 540});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  push();

  fill(0);
  textSize(20);
  text("Press Space to play once more!!", 100, 100);

  pop();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);

  drawSprites();

  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  catapult.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
	catapult.fly();
}

function detectCollision(lstone, mango)
{
	var lstonePosition = lstone.body.position;
	var mangoPosition = mango.body.position;

	var distance = dist(lstonePosition.x, lstonePosition.y, mangoPosition.x, mangoPosition.y);

	if(distance <= lstone.r + mango.r)
	{
		Matter.Body.setStatic(mango.body, false);
	}
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body, {x: 180, y: 540});
		catapult.attach(stone.body);
	}
}               