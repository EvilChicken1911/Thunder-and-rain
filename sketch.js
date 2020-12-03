const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Thunder1, Thunder2, Thunder3, Thunder4;
var drops = [], maxdrops = 100, rand, thundercreatedframe = 0;
var umbrella, thunder;

function preload() {
    Thunder1 = loadImage("images/thunderbolt/1.png");
    Thunder2 = loadImage("images/thunderbolt/2.png");
    Thunder3 = loadImage("images/thunderbolt/3.png");
    Thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,500);

    if(frameCount % 150 == 0)
    {
        for(var i = 0; i<maxdrops; i++)
        {
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    rand = Math.round(random(1,4));
    if(frameCount % 80 == 0)
    {
        thundercreatedframe = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand)
        {
            case 1:thunder.addImage(Thunder1);
            break; 
            case 2:thunder.addImage(Thunder2);
            break; 
            case 3:thunder.addImage(Thunder3);
            break; 
            case 4:thunder.addImage(Thunder4);
            break;
            default: break; 
        }
        thunder.scale = random(0.3,0.6);
    }
        if(thundercreatedframe + 10 == frameCount && thunder)
        {
            thunder.destroy();
        }
        umbrella.display();
        for(var i = 0; i < maxdrops; i++)
        {
            drops[i].showdrop();
            drops[i].updateY();
        }
        drawSprites();
}