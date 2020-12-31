
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
   boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);
 
	boy = createSprite(200, 300, 50, 50);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600, 200, 100, 100);
	ground = new Ground(200, 650, 2200, 20);
	stone = new Stone(boy.body,{x: 200, y: 100});
	mango1 = new Mango(610, 210, 10, 10);
	mango2 = new Mango(600, 190, 10, 10);
	mango3 = new Mango(570, 200, 10, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(boy.body, {x: mouseX, y: mouseY});
  
  }
  
  function mouseReleased(){
   stone.fly();
  }


