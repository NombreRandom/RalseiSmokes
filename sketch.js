const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var ralseiImage, ralsei;

function preload(){
  ralseiImage = loadImage("./assets/ralsei.png");
}

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ralsei = createSprite(300,250,20,50);
  ralsei.addImage("ralsei", ralseiImage);
  ralsei.scale = 0.3;


  ball = new Ball(240, height / 2 - 80, 20, 20);
  ball2 = new Ball(260, height / 2 - 80, 20, 20);
  ball3 = new Ball(270, height / 2 - 80, 20, 20);
  blower = new Blower(300, 230,150, 10);
  blowerMouth = new BlowerMouth(250, 230, 10, 10);
  button = createButton("Haz clic para soplar");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

}

function draw() {
  background("green");
  fill("white");
  stroke("blue");
  textSize(70)
  text("🚬", 80, 90); //creo que ya eso es todo

  Engine.update(engine);

  blower.show();
  fill("red");
  ball.show();
  fill("blue");
  ball2.show();
  fill("purple");
  ball3.show();
  blowerMouth.show();

  drawSprites();
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.01});
  Matter.Body.applyForce(ball2.body, {x:0, y:-0.01}, {x:0, y:-0.02});
  Matter.Body.applyForce(ball3.body, {x:-0.01, y:0}, {x:0, y:-0.02});

}

