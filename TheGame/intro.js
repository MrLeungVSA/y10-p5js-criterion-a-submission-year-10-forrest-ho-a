

function preloadintro()
{

}

function setupintro()
{

}

function drawintro()
{
	background(125,125,125);
	fill(0,0,0);
	text("This Is The Introduction Page\n\nClick Anywhere to Continue\n\n In this game, calculators are allowed, please put GDCs in assesment mode",10,50);
	text('')

	if (mouseIsPressed)
	{
		canvasID = 2
	}

}
