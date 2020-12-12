const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;

var ground, gameState, engine, world, dustbin, paper;
function preload() {
  dustbinimg = loadImage("dustbin.png");
}
function setup() {
  createCanvas(800, 400);

  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 40);
  ground = Bodies.rectangle(width / 2, 400, width, 10, {
    isStatic: true,
  });
  World.add(world, ground);
}

function draw() {
  //Render.run(render);
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
    text(
      "This is small game that will teach you the importance of throwing away your trash. \n                 Press Up Arrow to Start, and Up to throw away the trash.",
      50,
      200
    );
    if (keyCode === UP_ARROW) {
      gameState = "play";
    }
  }
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);

    dustbin.display();
    paper.display();
    imageMode(CENTER);
    image(dustbinimg, width - 77, 360, 180, 200);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 50,
      y: -100,
    });
  }
}
