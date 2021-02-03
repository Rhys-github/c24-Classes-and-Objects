class Pig{
    constructor(x,y){ //properties of the class are mentioned under constructor
        var options = {
            restitution: 0.8,
            friction: 0.3,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }

    display(){
        //namespacing is purely optional but it is a good programming practise
        var pos = this.body.position;
        var angle = this.body.angle;

        
        push();
        angleMode(RADIANS); //p5 uses degrees to measure angle,matter.js uses radians
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
       
        fill("green")
        rect(0,0,this.width,this.height); 
        pop();

    }
}