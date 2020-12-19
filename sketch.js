var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width/2,height-35, width,10);
	groundSprite.shapeColor = color(255)

	zone1Sprite = createSprite(400,670,200,10);
	zone1Sprite.shapeColor = "red";

    zone1 = Bodies.rectangle(400,670,100,10, {isStatic: true});

	World.add(world, zone1);

	zone2Sprite = createSprite(300,640,10,50);
	zone2Sprite.shapeColor = "red";

	zone2 = Bodies.rectangle(355,640,10,50, {isStatic: true});

    World.add(world, zone2);

	zone3Sprite = createSprite(500,640,10,50);
	zone3Sprite.shapeColor = "red";

	zone3 = Bodies.rectangle(445,640,10,50, {isStatic: true});

    World.add(world,zone3);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, friction: 3, density: 2, isStatic : true});
	World.add(world, packageBody);

	
	
	
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 
	if(keyCode === LEFT_ARROW)
{
	helicopterSprite.x = helicopterSprite.x - 20;
	translation = {
		x: 20, y: 0
	}

	Matter.Body.translate(packageBody, translation)
}	
	
  else if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x + 20;
	translation = {
		x: 20, y: 0
	}

	Matter.Body.translate(packageBody, translation)
}	
  if (keyCode === DOWN_ARROW){
	 Matter.Body.setStatic(packageBody,false)
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
      
}
}



