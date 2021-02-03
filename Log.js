class Log{
    constructor(x,y,height,angle){ //properties of the class are mentioned under constructor
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = 20;
        this.height = height;
        
        Matter.Body.setAngle(this.body, angle)
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
       
        strokeWeight(4)
        stroke("green")
        fill(255)
        rect(0,0,this.width,this.height); 
        pop();

    }
}