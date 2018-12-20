var canvasID;
var Move = true
var BossHp;
var Damageis0 = false
var difficulty;
var gameDuration = 0
var correctAnswers = 0
var bombItem
var bigbombItem
var giantbombItem
var poisonItem
var hpItem
var fullItem
var shieldItem
var bossSprite
var backgroundImg
var PlatformImg
var IceImg
var BossSpritePhase

function preload()
{
	preloadScroll();
	bombItem = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/Bomb.png');
	bigbombItem = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/BigBomg.png');
	giantbombItem = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/GiantBomb.png');
	poisonItem = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/Poison.png');
	hpItem = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/HealthPotion.png');
	fullItem = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/FullRestore.png');
	shieldItem = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/Shield.png');
	shieldItem = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/Shield.png');
	bossSprite = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/Boss.png');
	backgroundImg = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/background.png');
	PlatformImg = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/Platform.png');
	IceImg = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/IceCubeProjectile.png');
	BossSpritePhase = loadImage('https://mrleungvsa.github.io/y10-p5js-criterion-a-submission-year-10-forrest-ho-a/TheGame/Sprites/Boss2.png');


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
		image(backgroundImg,0,0,1000,700)
		//background(178,251,255);
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
	image(PlatformImg,600,600,100,100)
}


