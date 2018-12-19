var healthEndTime;
var startHealthDeduct;

function preloadHealth()
{


}

function setupHealth()
{
	health = 5;
	healthEndTime = 0;
	startHealthDeduct = false;
}

function drawHealth(setGameOverCanvasID)
{
	if (health <= 3 || health >= 3)
	{
		fill(0,255,0)
	}
	if (health == 2)
	{
		fill(255,162,0)
	}
	if (health <= 1)
	{
		fill(255,0,0)
	}
	rect(0,0,100,25);
	fill(0,0,0);
	textSize(20)
	text('HP  ' + health,0+10,0+20)
	if (health <= 0)
	{
		Move = false;
		jump = 0
		leftActive = true;
		rightActive = true;
		//canvasID = setGameOverCanvasID;

	}
}

function deductHealth(amount,countDownTime)
{
	if (canvasID == 1)
	{
		if (Damageis0 == false)
		{
			if (startHealthDeduct == false)
			{
				healthEndTime = frameCount + countDownTime;
				startHealthDeduct = true;
				health = health - amount;
			}
			else
			{
				if (frameCount >= healthEndTime)
				{
					startHealthDeduct = false;
				}
			}

		}
		else
		{
		}
	}
}

