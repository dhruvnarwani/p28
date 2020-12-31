class Tree{
    constructor(x, y, width, height){
     var options={
         isStatic : true,
         restitution : 0,
         friction : 0.5,
         density : 1.0
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.image = loadImage("sprites/tree.png");
     this.width = width;
     this.height = height;
    
     World.add(world, this.body);
    }
    display(){
            var pos =this.body.position;
            push();
            rectMode(CENTER);
            fill("red");
            rect(pos.x, pos.y, this.width, this.height);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        
    }
}