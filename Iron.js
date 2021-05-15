class Iron {
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
		'density':30,
		'friction':3,
		'restitution':0.8
	  };
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x,this.y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
       
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x,ironpos.y);
			rectMode(CENTER);
			strokeWeight(5);
			stroke("black");
			fill("yellow");
		
		rect(this.x,this.y,this.width,this.height);
      
			pop()
	}
}