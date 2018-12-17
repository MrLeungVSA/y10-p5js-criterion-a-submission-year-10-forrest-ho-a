
function setupdeathscreen()
{
}
function drawdeathscreen()
{
	fill(255,246,154)
	rect(350,100,300,400)
	fill(0,0,0)
	rect(395,225,200,25)
	textSize(30)
	fill(0,0,0)

	text('Game Over',415,135)
	fill(255,151,151)
	if (difficulty == 0)
	{
		rect(395,225,BossHp*4,25)
	}
	if (difficulty == 1)
	{
		rect(395,225,BossHp*2,25)
	}
	if (difficulty == 2)
	{
		rect(395,225,BossHp,25)
	}

	if (mouseX >= 350 && mouseX <= 750 && mouseY >= 350 && mouseY <= 375)
	{
		if (mouseIsPressed == true)
		{
			/*Invincibility = true
			InvincibilityTimer = 2
			canvasID = 1;
			BossHp = 100;
			health = 5;
			playerY = 300
			playerX = 500
			Move = true
			rad = 60
			yspeed = 3
			icex = 100
			icey = 100
			xpos = 35*/
		}
		fill(0,40,170)
		text('Retry',450,375)
	}
	else
	{
		fill(0,0,0)
		text('Retry',450,375)
	}
	if (mouseX >= 350 && mouseX <= 750 && mouseY >= 400 && mouseY <= 425)
	{
		if (mouseIsPressed == true)
		{
			text('Go Back To Main Menu',420,25)
			canvasID = 3;
		}
		fill(0,40,170)
		text('Main Menu',420,425)
	}
	else
	{
		fill(0,0,0)
		text('Main Menu',420,425)
	}
	if (mouseX >= 350 && mouseX <= 750 && mouseY >= 450 && mouseY <= 475)
	{
		if (mouseIsPressed == true)
		{
			kljkslhd
		}
		fill(0,40,170)
		text('Quit Game',420,475)
	}
	else
	{
		fill(0,0,0)
		text('Quit Game',420,475)
	}
}