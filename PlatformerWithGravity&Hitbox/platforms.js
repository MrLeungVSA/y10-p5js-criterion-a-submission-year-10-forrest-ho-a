var platforms;
var maxPlatforms;
var playerX;
var playerY;
var jump;
var jumpCounter;
var falling;
var maxHeight;
var platformmove;


/*
the 0 array location is the x coordinate of the platform

the 1st array location is the y coordinate of the platform

the 2nd array location is the length coordinate of the platform

the 3rd array location is the height coordinate of the platform

the 4th array location determines where the player can hit the platform
platforms[c][4] = 0; - top
platforms[c][4] = 1; - top+bottom
platforms[c][4] = 4; - all walls


the 5th array location determines which box is the correct one
platforms[c][5] = 0; - incorrect question
platforms[c][5] = 1; - correct question


the 6th array location is whether the platform exists or not
0 - does NOT exist
1 - does exist


the 7th array location determines which question this belongs with
0 - question 1
1 - question 2

*/



function preloadPlatforms()
{

}

function setupPlatforms()
{
	// setup the platforms
	// --------------------------------------
	maxPlatforms = 14;
	platforms = new Array(maxPlatforms);
	for (var r = 0; r < maxPlatforms; r++)
	{
		platforms[r] = new Array(8);
	}

	for (var c = 0; c < maxPlatforms; c++)
	{
		for (var r = 0; r < 8; r++)
		{
			platforms[c][r] = 0;
		}
	}


	// ------------------------------------- QUESTION 0 --------------------------------------------
	// 0 - 6
	// big platform on the bottom
	platforms[0][0] = 1;
	platforms[0][1] = 675;
	platforms[0][2] = 1000;
	platforms[0][3] = 50;
	platforms[0][4] = 0;
	platforms[0][6] = 1;
	platforms[0][7] = 0;

	// update your horizontal platforms
	platforms[1][0] = -50;
	platforms[1][1] = 100;
	platforms[1][2] = 50;
	platforms[1][3] = 700;
	platforms[1][4] = 0;
	platforms[1][6] = 0;
	platforms[1][7] = 0;


	platforms[2][0] = 1000;
	platforms[2][1] = 100;
	platforms[2][2] = 50;
	platforms[2][3] = 700;
	platforms[2][4] = 0;
	platforms[2][6] = 0;
	platforms[2][7] = 0;

	// initialize all platforms with x and y coordinates
	// starting with 1 because 0 is alreaddy the bottom platform
	for (var c = 3, x = 0; c <= 6; c++, x++)
	{
		// x coordinates
		platforms[c][0] = x+50;
		// y coordinates
		platforms[c][1] = x*125+200;				
		// length
		platforms[c][2] = 300;
		// height
		platforms[c][3] = 25;				
		// hit location
		platforms[c][4] = 0;
		// correct/incorrect
		platforms[c][5] = 0;
		// exist or not
		platforms[c][6] = 1;
		// question
		platforms[c][7] = 0;

	}

	// initialize all platforms with x and y coordinates
	// starting with 1 because 0 is alreaddy the bottom platform
	for (var c = 7, x = 0; c <= 10; c++, x++)
	{
		// x coordinates
		platforms[c][0] = x+450;
		// y coordinates
		platforms[c][1] = x*125+200;				
		// length
		platforms[c][2] = 300;
		// height
		platforms[c][3] = 25;				
		// hit location
		platforms[c][4] = 0;
		// correct/incorrect
		platforms[c][5] = 0;
		// exist or not
		platforms[c][6] = 1;
		// question
		platforms[c][7] = 0;

	}

	// correct answers

	// ------------------------------------- QUESTION 0 --------------------------------------------


	// ------------------------------------- QUESTION 1 --------------------------------------------




	// --------------------------------------

}

function showPlatforms(questionID)
{
	/*
	// show platform values
	for (var r = 0; r < maxPlatforms; r++)
	{

		for (var c = 0; c < maxPlatforms; c++)
		{
			text("x: "+platforms[c][0],50+r*100,50*c*50);
			text("y: "+platforms[c][1],100+r*100,50*c*50);
			text("length: "+platforms[c][1],150+r*100,50*c*50);
			text("height: "+platforms[c][1],200+r*100,50*c*50);

		}		
	}
	*/

	// move platforms
	for (var c = 0; c < maxPlatforms; c++)
	{
		if (platforms[c][6] == 1 && platforms[c][7] == questionID)
		{
			if (platforms[c][5] == 1)
			{
				fill(0,255,0);
			}
			else
			{
				fill(125,125,125);
			}
			rect(platforms[c][0],platforms[c][1],platforms[c][2],platforms[c][3]);	
			platforms[1][c] -=2;		
		}
	}		




}

function movePlatforms()
{
	// show platform values
	for (var r = 0; r < maxPlatforms; r++)
	{

		for (var c = 0; c < maxPlatforms; c++)
		{
			text("x: "+platforms[c][0],50+r*100,50*c*50);
			text("y: "+platforms[c][1],100+r*100,50*c*50);
			text("length: "+platforms[c][1],150+r*100,50*c*50);
			text("height: "+platforms[c][1],200+r*100,50*c*50);

		}		
	}


	// move platforms
	for (var c = 0; c < maxPlatforms; c++)
	{
		if (platforms[c][6] == 1)
		{
			fill(125,125,125);
			rect(platforms[c][0],platforms[c][1],platforms[c][2],platforms[c][3]);			

			// this affects the speed of movement
			// comment this if the platforms are not moving
			platforms[c][0] += 3;

		}

	}		

}
function drawWorld(questionID)
{
	showPlatforms(questionID);

	drawPlayer();

	manageJumpAndFall(questionID);
	manageWalkIntoWall(questionID);
	manageMoveLR();



	initiateNextQuestion();

}




