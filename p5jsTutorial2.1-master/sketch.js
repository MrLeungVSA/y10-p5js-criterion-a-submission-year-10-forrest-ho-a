var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 10;
  button2Y = 150;

  
}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,0,0);
		stroke(125,125,125);
		strokeWeight(3);
		rect(10,10,100,50);
		text("Move Over to 300,250",10,250)
	}
	else
	{
		fill(125,125,125);
		stroke(125,125,125);
		strokeWeight(3);
		rect(10,10,100,50);		
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);
	text(" ",35,40);

	if(mouseX > 300 && mouseX < 300 + 100 && mouseY > 250 && mouseY < 250 + 50)
	{
		fill(255,196,0)
		stroke(255,254,0);
		strokeWeight(2);
		rect(300,250,100,50)
		text("Lets play a game",100,100)
		stroke(0,10,144);
		fill(0,10,144);
		rect(0,0,700,500);
		stroke(255,252,139);
		fill(255,252,139);
		rect(0,0,250,150);
		rect(600,450,100,50);
		rect(356,245,135,27);
		stroke(44,165,0);
		fill(44,165,0);
		rect(0,0,225,125);
		stroke(0,0,0);
		fill(105,60,1);
		rect(50,25,50,50);
	}
	
	if(mouseX > 500 && mouseX < 500 + 25 && mouseY > 600 && mouseY < 600 + 10)
	{
		fill(0,255,68);
		stroke(0,0,0);
		strokeWeight(2);
		rect(500,600,25,10)
		textsize(60)
		text("Congradulations!",400,10)

	}




	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,100,50);

	if (mouseX > button2X && mouseX < button2X + 100 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("Nuke",button2X+30-5,button2Y+30+2);
		fill(255,60,0);
		stroke(255,60,0);
		rect(0,0,700,500);
		stroke(255,247,0);
		text("What did you do",450,250)
	}
	else
	{
		fill(255,255,255);
		stroke(0,0,0);
		textSize(12);
		text("Red Button",button2X+30,button2Y+30);
	}

}