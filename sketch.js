let angel = 0;
let x = 100;
let y = 200;

function setup() {
  createCanvas(1000,1000);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  push();
  fill(255,255,0);
  translate(500,500);
 rotate(angel);
  rect(0,0,100,50);
  pop();
  
  push();
  fill(50,100,255);
  translate(500,500);
  rotate(angel);
  rect(50,50,10,10);
  pop();
  
  push();
  fill(255,100,255);
  translate(500,500);
  rotate(angel + 40);
  rect(60,60,10,10);
  pop();
  
  push();
  fill(255,100,5);
  translate(500,500);
  rotate(angel + 80);
  rect(70,70,10,10);
  pop();
  
  
  push();
  fill(255,255,255);
  translate(500,500);
  rotate(angel + 100);
  rect(80,80,10,10);
  pop();
  
  angel +=1;

}
