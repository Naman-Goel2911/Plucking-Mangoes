class Mango
{
    constructor(x, y, radius)
    {
        var options = 
        {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.r = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.width = radius + 40;
        this.height = radius + 40;
        this.image = loadImage("PluckingMangoes/mango.png");
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}