const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(950,100,30);
	mango3=new mango(1000,200,30);
	mango4=new mango(980,150,30);
	mango5=new mango(1150,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj = new stone(240,420,20);

	rubber = new Rubberband(stoneObj.body,{x:240,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(25);
  text("click space to play a second time",50 ,50);
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
  stoneObj.display();
  rubber.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);

}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rubber.fly();
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  rubber.attach(stoneObj.body);
	}
  }
  function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position 
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
      if(distance<=lmango.r+lstone.r)
      {
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }


