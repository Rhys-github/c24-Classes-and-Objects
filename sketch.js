//namespace or giving a nick name
//Rhys Fernandes can be namespaced as Raja
//const Raza = "Rhys Fernandes"
//Mazin Marzouk can be namespaced as Razi
//const Razi = "Mazin Marzouk"

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;

function setup(){
    createCanvas(1200,400);

    //create an engine
    engine = Engine.create();

    //creating your own world
    world = engine.world;

    //create a ground body = rectangle
    ground = new Ground (600,height,1200,20);

    //create a box
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350)
    log1 = new Log(810,260,300,PI/2)
    
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220)
    log2 = new Log(810,180,300,PI/2)

    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    bird = new Bird(200,200);
}

function draw(){
    background(0);

    //to keep updating the engine
    Engine.update(engine);

    //to display your bodies, display it in function draw
    ground.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();
   
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}
