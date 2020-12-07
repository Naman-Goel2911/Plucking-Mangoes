class Stone
{
    constructor(x, y, radius)
    {
        var options =
        {
            isStatic: false,
            restitution:0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x, y , radius, options);
        this.width = radius + 60;
        this.height = radius + 60;
        this.image = loadImage("PluckingMangoes/stone.png");
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        imageMode(RADIUS);
        image(this.image, pos.x, pos.y, this.height, this.width);
    }
}