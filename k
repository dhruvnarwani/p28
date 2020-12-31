class Stone{
    constructor(x, y, width, height){
     var options={
         isStatic : true,
         restitution : 0,
         friction : 1,
         density : 1.2
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.image = loadImage("sprites/stone.png");
     this.width = width;
     this.height = height;
    
     World.add(world, this.body);
    }
    display(){
            var pos =this.body.position;
            push();
            rectMode(CENTER);
            fill("blue");
            rect(pos.x, pos.y, this.width, this.height);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        
    }
}
