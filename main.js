function preload(){}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
}

function draw(){
    fill("red");
    stroke("black");
    circle(100,300,40);

    fill("green");
    stroke("black");
    rect(200,200,5,10);

    fill("purple");
    stroke("black");
    ellipse(300,100,10,20);
}








