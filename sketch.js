var paper,dustbin,ground;
Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
paper = loadImage("paper.png");
dustbin = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  Engine.run(engine);
  world = engine.world;
paper = new Paper(100,450,40);
ground = new Ground(400,660,800,20);
dustbin = new Dustbin(600,640); 
}

function draw() {
  rectMode(CENTER);
  background("white");
  paper.display();
  ground.display();
  dustbin.display();
}
function keyPressed(){
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-80})
}
}