var canvasID;
var Move = true
var BossHp;
var Damageis0 = false
var difficulty;
var gameDuration = 0
var correctAnswers = 0

function preload()
{

}
//problem at 460-510,395
//problem at x,495
function setup()
{
	createCanvas(1000,700);
	setupPlatforms();
	setupplayer();
	setupboss();
	setupHealth();
	setupscroll();
	setupdeathscreen();
	setupwinscreen();
	setupmainmenu();
	// CanvasIDs
	// 1 = boss
	// 2 = death/win screen
	// 3 = intro page
	// 4 = main menu

	canvasID = 3;

}

function draw()
{
	if (frameCount % 60 == 0 && gameDuration >= 0 && BossHp >= 0)
	{
		gameDuration +=1
	}
	fill(255,255,255)
	if (canvasID == 3)
	{
		drawmainmenu();
	}
	if (canvasID == 1)
	{
		background(0,0,0);
		showControls();	
		drawHealth();
		showPlatforms(0);
		drawboss();
		if (Move == true)
		{
			drawscroll();
			manageMoveLR();
			manageJumpAndFall();
		}
		drawPlayer();

		// draw and manage player movement

	}
	else if (canvasID == 2)
	{
		drawdeathscreen();	
	}
	fill(255,255,255)
	if (canvasID == 1 && BossHp <= -300)
		{
			drawwinscreen();
		}

}


