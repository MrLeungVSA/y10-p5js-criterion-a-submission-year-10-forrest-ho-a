function setup()
{
  createCanvas(900,700);
  background(0);
  strokeWeight(20);
  frameRate(2);
  
}

function draw()
{
	background(255,250,159)

	fill(0,0,255)
	for(var i = 0; i < width; i++) {
		var r = random(255);
		stroke(r);
		line(10,1,900,height);
		line(900,1,10,height);
	}

	fill(0,0,255);

	stroke(0,0,0);

	strokeWeight(20);


	rect(400,10,100,50);
	rect(400,640,100,50);


	fill(50,255,20);    
	stroke(119,0,255);
	strokeWeight(10);

	rect(10,300,50,100);
	rect(840,300,50,100);

	stroke(134,245,39)
	strokeWeight(5)

	fill(255,0,0);
	fill(175,255,253)
  	rect(0,0,50,50)
  	rect(0,650,50,50)
  	rect(850,0,50,50)
  	rect(850,650,50,50)
  	fill(199,199,199)
  	stroke(255,129,33)
  	rect(225,175,450,350)

  	fill(255,0,0)
  	strokeWeight(10)
  	stroke(0,0,0)

  	rect(275,200,150,20);
 	 rect(275,200,20,300);
  	rect(275,350,100,20);

 	rect(450,200,20,300);
  	rect(450,350,150,20);
  	rect(600,200,20,300);

  	strokeWeight(2)
  	textSize(50)
  	text("Masterpeice",325,150)

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50


  
    

}