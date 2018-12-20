
var backGroundMusic;

function preloadmainmenu()
{
	//backGroundMusic = loadSound("https://crowmain.github.io/Forrest-sFirstProject/Game/Sounds/BGM.mp3")

}

function setupmainmenu()
{
	//backGroundMusic.play();

}

function drawmainmenu()
{

	background(0,255,255);
	fill(0,0,0);
	textSize(20);
	text("Main Menu", 350, 20);
	if(mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY < 450)
	{
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,350,150,100);
		textSize(20);
		fill(0,0,0);
		text("Expert",75,400);
		if (mouseIsPressed == true)
		{
		gameDuration = 0;
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,350,150,100);
		text("Expert",75,400);
		canvasID = 1;
		difficulty = 2;
		BossHp = 200;
		Invincibility = true
		InvincibilityTimer = 2
		health = 5;
		playerY = 300
		playerX = 500
		Move = true
		rad = 60
		yspeed = 3
		icex = 100
		icey = 100
		xpos = 35
		PyramidSpeed = 4
		correctAnswers = 0
		questionsAsked = 0
		SkyBeamY = 0
		}
	}
	else
	{
		fill(255,87,87);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,350,150,100);
		fill(0,0,0);
		text("Expert",75,400);
	}

	if(mouseX > 50 && mouseX < 200 && mouseY > 200 && mouseY < 300)
	{
		fill(255,162,0);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,200,150,100);
		textSize(20);
		fill(0,0,0);
		text("Regular",75,250);
		if (mouseIsPressed == true)
		{
			gameDuration = 0;
			fill(0,0,0);
			stroke(0,0,0);
			strokeWeight(1);
			rect(50,200,150,100);
			text("Regular",75,250);
			canvasID = 1;
			difficulty = 1;
			BossHp = 100;
			Invincibility = true
			InvincibilityTimer = 2
			health = 5;
			playerY = 300
			playerX = 500
			Move = true
			rad = 60
			yspeed = 3
			icex = 100
			icey = 100
			xpos = 35
			correctAnswers = 0
			questionsAsked = 0
			SkyBeamY = 0
		}
	}
	else
	{
	fill(255,215,118);
	stroke(0,0,0);
	strokeWeight(1);
	rect(50,200,150,100)
	fill(0,0,0);
	text("Regular",75,250);	
	}
	if (mouseX > 50 && mouseX < 200 && mouseY > 50 && mouseY < 150)
	{
		fill(0,255,68);
		stroke (0,0,0);
		strokeWeight(1);
		rect(50,50,150,100);
		textSize(20);
		fill(0,0,0);
		text("Simple",75,105);
		if (mouseIsPressed == true)
		{
			gameDuration = 0;
			fill(0,0,0);
			stroke(0,0,0);
			strokeWeight(1);
			rect(50,50,150,100);
			text("Simple",75,105);
			canvasID = 1;
			difficulty = 0;
			BossHp = 50;
			Invincibility = true
			InvincibilityTimer = 2
			canvasID = 1;
			health = 5;
			playerY = 300
			playerX = 500
			Move = true
			rad = 60
			yspeed = 3
			icex = 100
			icey = 100
			xpos = 35
			PyramidSpeed = 2
			correctAnswers = 0
			questionsAsked = 0
			SkyBeamY = 0
		}
	}
	else
	{
		fill(121,255,157);
		stroke(0,0,0);
		strokeWeight(1);
		rect(50,50,150,100)
		fill(0,0,0);
		text("Simple",75,105);
	}
}
