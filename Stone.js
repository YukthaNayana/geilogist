class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
		'density':12,
		'friction':0.9,
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
       
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x,stonepos.y);
			rectMode(CENTER);
			strokeWeight(5);
			stroke("black");
			fill("brown");
		
		rect(this.x,this.y,this.width,this.height);
      
			pop()
	}
}