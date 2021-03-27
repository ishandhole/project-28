class Rubberband{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.rubberband = Constraint.create(options);
        World.add(world, this.rubberband);
    }

    attach(body){
		this.rubberband.bodyA=body;
	}

    fly(){
        this.rubberband.bodyA = null;
    }

    display(){
        if(this.rubberband.bodyA){
            var pointA = this.rubberband.bodyA.position;
            var pointB = this.pointB;
            stroke(42,22,8);

            if(pointA.x<220){
                strokeWeight(7);

            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            }

        }

    ;
    }

    
}