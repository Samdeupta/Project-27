const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var chain,base,pendulum;


function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;


    base = new Base(230,100,160,20);
    pendulum = new Pendulum(50,100,50,50)
    chain = new Chain(base.body,pendulum.body);

}

function draw(){
    background("black");
    Engine.update(engine);
    
    base.display();
    pendulum.display();
    chain.display();

   
        
        

    

}
