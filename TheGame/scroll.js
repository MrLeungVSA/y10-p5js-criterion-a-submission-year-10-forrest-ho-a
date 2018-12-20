var ans1;
var ans2;
var ans3;
var gatex
var gatey
var gatespeedx = -2.5
var gatespeedy = 0
var gatexdirection = 1
var gateydirection = 0
var gatetime = 2
var gatereset = false
var answers
var answerLength
var answerHeight
var question
var questionButtons
var generateMath
var mathNumber1 = 10
var mathNumber2 = 10
var mathType = 1
var correctAnswer = 1
var answerPicker = false
var correctAnswer = 0
var loottype = 1
var generateLoot = false
// items
var Small = false
var Big = false
var Giant = true
var HealthUp = false
var FullHp = false
var GiveLoot = false
var Poison = false
var PoisonTick = false
var PoisonDuration = 5
var PoisonAmount = 1
var Immune = false
var Invincibility = false
var InvincibilityTimer = 5
var Explode = false
var GifCountdown = 0
var splode = false
var splodeTimer = 0
// item usage

var hasItem = false

function preloadScroll()
{
	answers = 5;
	answerHeight = [50,100,150,200,250]
	answerLength = [100,100,100,100,100]
	questionButtons = new Array(answers);
	fill(0,0,0)
	questionButtons[0] = rect(50,50)

}

function setupscroll()
{
	gatex = 0
	gatey = 0
}


function drawscroll()
{
	gatemove();
	math();
	loot();
	fill(0,0,0)

	if (question == true)
	{
		generateLoot = false

		if (playerX >= gatex && playerX <= gatex + 10)
		{
			deductHealth(1,30);
		}
	}
}
function loot()
/*
Bomb - 50%
Big Bomb - 20%
Giant Bomb - 5%
Hp Potion - 20%
Full Restore - 5%
*/
{
	if (generateLoot == false)
	{
	}
	if (generateLoot == true && GiveLoot == true)
	{
		if (loottype <= 25)
		{
			Big = true
		}
		if (loottype >= 26 && loottype <= 80)
		{
			Small = true
		}
		if (loottype >= 81 && loottype <= 90)
		{
			HealthUp = true
		}
		if (loottype >= 91 && loottype <= 97)
		{
			Giant = true
		}
		if (loottype >= 98 && loottype <= 100)
		{
			FullHp = true
		}
		if (loottype >= 101 && loottype <= 120)
		{
			Poison = true
		}
		if (loottype >= 121 && loottype <= 150)
		{
			Immune = true
		}
	}
	if (Poison == true)
	{
		fill(255,188,0)
		image(poisonItem,playerX,playerY-25,25,25)
		hasItem = true
		Big = false
		Giant = false
		HealthUp = false
		FullHp = false
		Small = false
		Immune = false
		PoisonAmount = int(random(0,5))
		if (keyIsDown(32))
		{
			PoisonTick = true
		}
		if (PoisonTick == true)
		{
			if (frameCount % 60 == 0 && PoisonDuration > 0)
			{
				PoisonDuration --;
				BossHp -= PoisonAmount;
			}
			if (PoisonDuration <= 0)
			{
				PoisonTick = false
				Poison = false
			}
		}
		else
		{
			PoisonDuration = 5
		}
		textSize(20)
		fill(255,255,255)
	}
	if (Small == true)
	{
		fill(255,188,0)
		image(bombItem,playerX,playerY-25,25,25)
		hasItem = true
		Big = false
		Giant = false
		HealthUp = false
		FullHp = false
		Poison = false
		Immune = false
		PoisonTick = false
		if (keyIsDown(32))
		{
			splodeTimer = 0;
			BossHp -=2;
			Small = false
			splode = true
		}
	}
	if (Big == true)
	{
		fill(255,188,0)
		image(bigbombItem,playerX,playerY-25,25,25)
		hasItem = true
		Small = false
		Giant = false
		HealthUp = false
		FullHp = false
		Poison = false
		Immune = false
		PoisonTick = false
		if (keyIsDown(32))
		{
			splodeTimer = 0;
			splode = true
			BossHp -=4;
			Big = false
		}
	}
	if (Giant == true)
	{
		fill(255,188,0)
		image(giantbombItem,playerX-45,playerY-45,50,50)
		hasItem = true
		Small = false
		Big = false
		HealthUp = false
		FullHp = false
		Poison = false
		Immune = false
		PoisonTick = false
		if (keyIsDown(32))
		{
			BossHp -= 10;
			Giant = false
			Explode = true
		}
	}
	if (HealthUp == true)
	{
		fill(255,188,0)
		image(hpItem,playerX,playerY-25,25,25)
		hasItem = true
		Small = false
		Big = false
		Giant = false
		FullHp = false
		Poison = false
		Immune = false
		PoisonTick = false
		if (keyIsDown(32))
		{
			health+=2
			HealthUp = false
		}
	}
	if (FullHp == true)
	{
		fill(255,188,0)
		image(fullItem,playerX,playerY-25,25,25)
		hasItem = true
		Small = false
		Big = false
		Giant = false
		HealthUp = false
		Poison = false
		Immune = false
		PoisonTick = false
		if (keyIsDown(32))
		{
			health = 5
			FullHp = false
		}
	}
	if (Immune == true)
	{
		fill(255,188,0)
		image(shieldItem,playerX,playerY-25,25,25)
		hasItem = true
		Small = false
		Big = false
		Giant = false
		HealthUp = false
		Poison = false
		FullHp = false
		if (keyIsDown(32))
		{
			Immune = false
			Invincibility = true
			InvincibilityTimer = 5
		}
	}
	fill(255,255,255)
	if (Invincibility == true)
		{
			if (frameCount % 60 == 0 && InvincibilityTimer > 0)
			{
				InvincibilityTimer --;
				Damageis0 = true
			}
			if (InvincibilityTimer <= 0)
			{
				Invincibility = false
				Damageis0 = false
				Immune = false
			}
		}
	if (Invincibility == false)
		{
			InvincibilityTimer = 5
		}
	if (Explode == true)
	{
		gif_createImg.show();
		//gif_createImg.frame([0]);
		gif_createImg.position(8,80);
		GifCountdown ++;
	}
	if (GifCountdown >= 180)
	{
		Explode = false
	}
	if (Explode == false)
	{
		gif_createImg.hide();
		GifCountdown = 0
	}
	if (splode = true)
	{
		if (bossPhase1 == true)
		{
			image(explodeImage,xpos-100,ypos-50);
		}
		if (bossPhase2 == true)
		{
			image(explodeImage,homeX-100,homeY-50);
		}
		if (bossPhase3 == true)
		{
			image(explodeImage,700,250);
		}
		splodeTimer +=1;
	}
	if (splodeTimer >= 100)
	{
		splode == false
	}
	console.log(splodeTimer)
	console.log(splode)
	if (splode == false)
	{
		splodeTimer = 0;
		gif_createImgTwo.hide();
	}

}
function math()
{
	var answer = false
	var question = false
	var mathType = 1
	if (question == true)
	{
		generateLoot = false;
	}

	if (gatex >= 10)
	{
		question = true 
		generateMath = true
	}
	if (question == false)
	{
		GiveLoot = false
		loottype = int(random(0,150))
		generateLoot = false;
		mathNumber1 = int(random(0,100))
		mathNumber2 = int(random(0,100))
		mathType = int(random(0,1))
		correctAnswer = int(random(0,3));
		ans1 = int(random(-98,198))
		ans2 = int(random(-98,198))
		ans3 = int(random(-98,198))


	}
	if (question == true)
	{
		questionsAsked += 1;
		generateLoot = true;
		textSize(45)

		if (mathType == 0)
		{
			text(mathNumber2+"+"+mathNumber1,650,650)
			if (correctAnswer == 0)
			{
				ans1 = mathNumber2+mathNumber1
			}
			if (correctAnswer == 1)
			{
				ans2 = mathNumber2+mathNumber1
			}
			if (correctAnswer == 2)
			{
				ans3 = mathNumber2+mathNumber1
			}

		}
		if (mathType == 1)
		{
			text(mathNumber2+"-"+mathNumber1,650,650)
			if (correctAnswer == 0)
			{
				ans1 = mathNumber2-mathNumber1
			}
			if (correctAnswer == 1)
			{
				ans2 = mathNumber2-mathNumber1
			}
			if (correctAnswer == 2)
			{
				ans3 = mathNumber2-mathNumber1
			}

		}
		showAnswer(ans1,ans2,ans3);

		textSize(30)
		textSize(15)
	}
	if (question == true)
	{

		if (playerX >= gatex && playerX <= gatex + 10)
		{
			deductHealth(1,30);
		}
	}
}
function showAnswer(ans1,ans2,ans3)
{
	textSize(45)
	if (mouseX > 100 && mouseX < 250 && mouseY > 610 && mouseY && mouseY < 660)
	{
		fill(255,128,0)
		text(ans1,110,650)
		if (mouseIsPressed == true)
		{
			if (correctAnswer == 0)
			{
				gatex = -10
				generateLoot = true;
				GiveLoot = true
				correctAnswers += 1;
			}
			else
			{
				deductHealth(1,30);
			}
			fill(255,0,0)
			text(ans1,110,650)
		}
	}
	else
	{
		fill(255,255,0)
		text(ans1,110,650)
	}
	if (mouseX > 300 && mouseX < 450 && mouseY > 610 && mouseY && mouseY < 660)
	{
		fill(255,128,0)
		text(ans2,310,650)
		if (mouseIsPressed == true)
		{
			if (correctAnswer == 1)
			{
				gatex = -10
				generateLoot = true;
				GiveLoot = true
				correctAnswers += 1;
			}
			else
			{
				deductHealth(1,30);
			}
			fill(255,0,0)
			text(ans2,310,650)
		}
	}
	else
	{
		fill(255,255,0)
		text(ans2,310,650)
	}
	if (mouseX > 500 && mouseX < 650 && mouseY > 610 && mouseY && mouseY < 660)
	{
		fill(255,128,0)
		text(ans3,510,650)
		if (mouseIsPressed == true)
		{
			if (correctAnswer == 2)
			{
				gatex = -10
				generateLoot = true;
				GiveLoot = true
				correctAnswers += 1;
			}
			else
			{
				deductHealth(1,30);
			}
			fill(255,0,0)
			text(ans3,510,650)
		}
	}
	else
	{
		fill(255,255,0)
		text(ans3,510,650)
	}
}
function gatemove()
{
	var gate = true
	if (gatex < 10)
	{
		gate = false
	}
	if (gate == false)
	{
		if (frameCount % 60 == 0 && gatetime > 0)
		{
		gatetime --;
		}
	}
	if (gatetime <= 0)
	{
		gatereset = true
	}
	if (gatereset == true)
	{
		gatex = 1050
		gatereset = false
		gatetime = 2
	}


	
	fill(0,0,0)
	gatex = gatex + gatespeedx * gatexdirection;
	gatey = gatey + gatespeedy * gateydirection;

 	 // Test to see if the shape exceeds the boundaries of the screen
 	 // If it does, reverse its direction by multiplying by -1
 	 fill(255,255,255)
 	 rect(gatex,gatey,10,700)
}