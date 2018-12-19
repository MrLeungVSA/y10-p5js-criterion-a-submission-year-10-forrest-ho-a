var platforms;
var maxPlatforms;
var playerX;
var playerY;
var jump;
var jumpCounter;
var falling;
var maxHeight;
var moveLR;
var leftActive;
var rightActive;
var goToNextQuestion;
var countDownToNextQuestion;
var prepAnimation;
var Move = true
var down;


function preloadPlatforms()
{

}

function setupplayer()
{
	// setup player variables
	playerX = 500;
	playerY = 180;

	// left and right movement speed of player
	playerSpeed = 10;

	falling = true;

	jumpMaxHeight = 150;
	jump = 0;
	jumpCounter = 0;
	prepAnimation = 0;
	goToNextQuestion = false;
	moveLR = "stop";
	leftActive = false;
	rightActive = false;

	// setup player variables
}

function showControls()
{
	fill(255,255,255);
}



function drawPlayer()
{
	if (playerX >= 1000)
	{
		playerX = 50
	}
	if (playerX <= 0)
	{
		playerX = 950
	}
	if (playerY >= 700)
	{
		playerY = 0
	}
	// draw player
	if (Move == false)
	{
		playerY -=5;
		textSize(250)
		text('You Died!',0,340)
	}
	if (playerY < -10)
	{
		canvasID = 2
	}
	fill(255,0,0);
	if (InvincibilityTimer == 5 || InvincibilityTimer == 3 || InvincibilityTimer == 1)
	{
		{
			fill(0,102,255)
		}
	}
	if (InvincibilityTimer == 4 || InvincibilityTimer == 2)
	{
		{
			fill(195,219,255)
		}
	}
	if (Invincibility == false && InvincibilityTimer == 5)
	{
		fill(255,0,0)
	}
	ellipse(playerX,playerY,10,15);
	/*if (keyIsDown(8))
	{
		health = 5;
		BossHp -= 1;
		correctAnswers +=1;
	}*/

}

function manageMoveLR()
{
	if (moveLR == "left")
	{
		playerX = playerX - playerSpeed;
	}
	else if (moveLR == "right")
	{
		playerX = playerX + playerSpeed;
	}

}

function playerTouchTop()
{
	for (var c = 0; c < maxPlatforms; c++)
	{
		if (platforms[c][4] == 1 && platforms[c][6] == 1)
		{
			if (playerY > platforms[c][1] + platforms[c][3] - 5 && playerY < (platforms[c][1] + platforms[c][3] + 5) && playerX > platforms[c][0] && playerX < platforms[c][0] + platforms[c][2])
			{
				jump = 2;
				falling = true;

				platforms[c][6] = 0;

			}			
		}
	}
	return false;
}

function manageJumpAndFall()
{
	if (down == 1)
	{
		playerY +=25;
		down = false
	}
	// character jump
	if (jump == 1)
	{
		// up movement
		if (jumpCounter == 0)
		{
			maxHeight = playerY - jumpMaxHeight;
			jumpCounter = 1;
		}

		if (jumpCounter == 1)
		{
			// rate of up movement
			playerY -= 10;


			// maximum jump height
			if (playerY < maxHeight || playerTouchTop())
			{
				falling = true;
				jump = 2;
			}
		}
	}

	if (falling == true)
	{
		// rate of down movement
		playerY += 6;
		playerOnPlatform();	
	}
}

function playerOnPlatform()
{
	// check if character is on platform
	for (var c = 0; c < maxPlatforms; c++)
	{
		if ((platforms[c][4] == 0 || platforms[c][4] == 1) && platforms[c][6] == 1)
		{
			if (playerY > platforms[c][1] - 5 && playerY < (platforms[c][1] + 5) && playerX > platforms[c][0] && playerX < platforms[c][0] + platforms[c][2])
			{
				playerY = platforms[c][1] - 5;
				jump = 0;
				jumpCounter = 0;
				break;
			}
		}
	}
}

function keyPressed()
{
	if (Move == true)
	{
		if (key == 'w' || key == 'W' && jump == 0)
		{
			jump = 1;
			falling = false;
		}
		if (key == 'a' || key == 'A')
		{
			moveLR = "left";
			leftActive = true;
		}
		if (key == 'D' || key == 'D')
		{
			moveLR = "right";
			rightActive = true;
		}
		if (key == 'S' || key == 's')
		{
			down = 1;
		}

	}
	else
	{
	}
}

function keyReleased()
{
	if (Move == true)
	{
		if (key == 'a' || key == 'A' && leftActive == true)
		{
			leftActive = false;
		}
		if (key == 'D' || key == 'D' && rightActive == true)
		{
			rightActive = false;
		}
		if (leftActive == false && rightActive == false)
		{
			moveLR = "stop";
		}
	}
	else
	{
	}
}
