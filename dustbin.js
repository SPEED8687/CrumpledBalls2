class Dustbin{
constructor(x,y){
this.x = x;
this.y = y;
this.image = loadImage("dustbingreen.png");
this.width = 200;
this.height = 100;
this.thickness = 20;
this.angle = 0;
this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true});
this.leftBody = Bodies.rectangle(this.x - this.width/2, this.y - this.height/2, this.thickness,this.height,{isStatic:true});
this.rightBody = Bodies.rectangle(this.x + this.width/2, this.y + this.height/2, this.thickness,this.height * 3,{isStatic:true});
Matter.Body.setAngle(this.leftBody,this.angle)
Matter.Body.setAngle(this.rightBody, -1 * this.angle)
World.add(world,this.leftBody);
World.add(world,this.rightBody);
World.add(world,this.bottomBody);
}
display(){
var posBottom = this.bottomBody.position;
var posleft = this.leftBody.position;
var posright = this.rightBody.position;
push();
translate(posleft.x,posleft.y);
rectMode(CENTER);
angleMode(RADIANS);
fill("grey");
rotate(this.angle)
rect(0,0,this.thickness,this.height);
pop();

push();
translate(posright.x,posright.y);
rectMode(CENTER);
angleMode(RADIANS);
fill("grey");
rotate(-1 * this.angle)
rect(0,-100,this.thickness,this.height);
pop();

push();
translate(posBottom.x,posBottom.y + 10);
rectMode(CENTER);
imageMode(CENTER);
angleMode(RADIANS);
fill("white");
rect(0,0,this.width,this.thickness);
image(this.image,-0,-this.height/2,this.width + 40,this.thickness + 105);
pop();
}
}