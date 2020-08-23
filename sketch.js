
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	plat = new Ground(400, 150, 400, 40); 
	bobObject1 = new Bob(300, 500);
	bobObject2 = new Bob(350, 500);
	bobObject3 = new Bob(400, 500);
	bobObject4 = new Bob(450, 500);
	bobObject5 = new Bob(500, 500);


	 rope1 = new Chain(bobObject1.body, plat.body, -160, 0);
	 rope2 = new Chain(bobObject2.body, plat.body, -80, 0);
	 rope3 = new Chain(bobObject3.body, plat.body, 0, 0);
	 rope4 = new Chain(bobObject4.body, plat.body, 80, 0);
	 rope5 = new Chain(bobObject5.body, plat.body, 160, 0);



	
	Engine.run(engine);
  
}


function draw() {

  background(0);
  
  

  plat.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-100, y:80});

}

}



