
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1000,700);
	//creating object of test class
	// objectname= new classname()
	//t=new Test();  //constructor called 
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	} 
	ball=Matter.Bodies.circle(200,200,20,ball_options)
    World.add(world,ball)
	//creating objects from ground 
    ground = new Ground (width/2,680,1000,20)
	leftSide= new Ground(580,610,20,120)
	rightSide= new Ground(750,610,20,120)
	Engine.run(engine);

}

function keyPressed(){
	if (keyCode==UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:45,y:-35})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  //calling function
  //t.show()
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}



