class Bob{
    constructor(x, y){
      var  options = {
    isStatic:false,
    restitution:0.3,
    friction:1,
    density:0.2,
    
        }
    this.body = Bodies.circle(x, y, 40, options);
    this.radius = 40;
    World.add(world, this.body);
    
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    
    }
    
    }