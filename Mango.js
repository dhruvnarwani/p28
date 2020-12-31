class Mango {
constructor(x, y, radius){
    var options= {
        isStatic : true,
        restitution : 0.3,
        friction : 1.0
    }
    this.body = Matter.Bodies.circle(x, y, radius, options);
    this.image = loadImage("sprites/mango.png");
    this.radius = radius;
    World.add(world, this.body);
}
 display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    fill("pink");
    stroke("blue");
    strokeWeight(4);
    ellipse(0, 0, this.radius, this.radius);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
}
}