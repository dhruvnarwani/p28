class Stone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.stone = Constraint.create(options);
        this.pointB = pointB;
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.stone);
    }

    fly(){
     this.stone.bodyA = null;
    }
    display(){
        if(this.stone.bodyA){
        var pointA = this.stone.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    
}