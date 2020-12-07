class Catapult
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 7
        }

        this.pointB = pointB;
        this.body =  Constraint.create(options);
        World.add(world, this.body);
    }

    fly()
    {
        this.body.bodyA = null;
    }

    attach(body)
    {
        this.body.bodyA = body;
    }

    display()
    {
        if(this.body.bodyA)
        {
        var posBodyA = this.body.bodyA.position;
        var posPointB = this.pointB;

        strokeWeight(7);
        stroke(0);
        line(posBodyA.x, posBodyA.y, posPointB.x, posPointB.y);
        }
    }
}