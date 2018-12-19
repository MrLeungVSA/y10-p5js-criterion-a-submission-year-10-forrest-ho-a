
var rad = 60; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 0; // Speed of the shape
var yspeed = 3; // Speed of the shape

var xdirection = 0; // Left or Right
var ydirection = 1; // Top to Bottom

var IceBeam
var IceBeamOn
var IceBeamTick
var IceCharge
var attack = 2
var iceCubeIsOnScreen = false
var icecubey = 50
var icecubex = 50
var icecubemove = 1
var icecubex2 = -150
var icespeed = 5
var icecubey2 = 50
var iceCubeIsOnScreen2 = false
var icespeed2 = 3.75
var icespeed3 = 12.5
var icecubex3 = 25
var icecubey3 = 25
var iceCubeIsOnScreen3 = false
var icex = 100
var icey = 100
var icebounce = 5
var icecubemovey =1
var icecubemovex =2
var up
var left
var down
var right
var playerx = 50
var playery = 50
var IcePower = 1
// Attack 4
var SkyBeamX = 100
var BeamAttack = false
var SkyBeamY = 0
var BeamHeight = 0
var BeamMove = true
// Hp management
//var BossHp
// phase2
var homeX = 0
var homeY = 0
var Size = 50
var homeSpeed;
// SideBeams
var BeamsOn = false
var Beam1 = false
var Beam2 = false
var Beam3 = false
var Beam4 = false
var Beam5 = false
var BeamRandom1 = 0
var BeamRandom2 = 0
var BeamRandom3 = 0
var BeamRandom4 = 0
var BeamRandom5 = 0
var BeamCountDown = 2
var BeamDuration = 3
// Phase3
var Size3 = 0
// Triangle
var PyramidX = 100
var PyramidY = 100
var TringleBeam = false
var PyramidRecharge = 3
var PyramidBeam = 3
var PyramidSpeed;
//Spinners
var SpinAttack = true
var Spinx = 1000;
var Spiny = 350;
// wind
var LeftWind = false
var RightWind = false
var StormChance = 0
var StormIsActive = 1
var StormTimer = 5
var IceBeamOn = true
var thirdboss = false
var bossPhase1 = false
var bossPhase2 = false
var bossPhase3 = false



function setupboss() {
  // Set the starting position of the shape
  xpos = 35;
  ypos = 100;
  IceBeam = false
  IceBeamOn = true
  IceBeamTick = 1
  IceCharge = 2

}
function drawboss() {
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (difficulty == 0)
  {
	  if (BossHp >= 30)
	  {
	  	bossPhase1 = true
	  	bossPhase2 = false
	  	bossPhase3 = false
		if (xpos > width - rad || xpos < rad) {
		xdirection *= -1;
		}
		if (ypos > height - rad || ypos < rad) {
		ydirection *= -1;
		}
	    attack1();
	    attack2();
	    attack3();
	  }
	  if (BossHp <= 29  && BossHp >= 0)
	  {
	  	bossPhase1 = false
	  	bossPhase2 = true
	  	bossPhase3 = false
	    icecubex1 = 1000
	    icecubex2 = 1000
	    icecubex3 = 1000
	    homeSpeed = 1
	    atk5();
	    atk6();
	  }
	if (BossHp <= 29)
	{
		if (yspeed >=0)
		{
			yspeed -=0.1;
		}
		if (rad >= 0)
		{
			rad -=0.3;
		}
		if (rad <= 0 && yspeed <= 0)
		{
			xpos = 1000
		}
	}
	}
	if (difficulty == 1)
  	{
	  if (BossHp >= 70)
	  {
	  	bossPhase1 = true
	  	bossPhase2 = false
	  	bossPhase3 = false
		if (xpos > width - rad || xpos < rad) {
		xdirection *= -1;
		}
		if (ypos > height - rad || ypos < rad) {
		ydirection *= -1;
		}
	    attack1();
	    attack2();
	    attack3();
	    attack4();
	  }
	  if (BossHp <= 69  && BossHp >= 41)
	  {
	  	bossPhase1 = false
	  	bossPhase2 = true
	  	bossPhase3 = false
	    icecubex1 = 1000
	    icecubex2 = 1000
	    icecubex3 = 1000
	    homeSpeed = 1.5
	    atk5();
	    atk6();
	  }
	  if (BossHp <= 40)
	  {
	  	bossPhase1 = false
	  	bossPhase2 = false
	  	bossPhase3 = true
	  	PyramidSpeed = 1
	  	if (BossHp >= 1)
	  	{
		  	atk7();
		   	atk8();
		    atk9();
	  	}
	    boss3();
	  }
	if (BossHp <= 70)
	{
		if (yspeed >=0)
		{
			yspeed -=0.1;
		}
		if (rad >= 0)
		{
			rad -=0.3;
		}
		if (rad <= 0 && yspeed <= 0)
		{
			xpos = 1000
		}
	}
	}
	if (difficulty == 2)
  {
	  if (BossHp >= 140)
	  {
	  	bossPhase1 = true
	  	bossPhase2 = false
	  	bossPhase3 = false
		if (xpos > width - rad || xpos < rad) {
		xdirection *= -1;
		}
		if (ypos > height - rad || ypos < rad) {
		ydirection *= -1;
		}
	    attack1();
	    attack2();
	    attack3();
	  }
	  if (BossHp <= 140  && BossHp >= 70)
	  {
	  	bossPhase1 = false
	  	bossPhase2 = true
	  	bossPhase3 = false
	    icecubex1 = 1000
	    icecubex2 = 1000
	    icecubex3 = 1000
	    homeSpeed = 2
	    atk5();
	    atk6();
	  }
	  if (BossHp <= 69)
	  {
	  	bossPhase1 = false
	  	bossPhase2 = false
	  	bossPhase3 = true
	  	PyramidSpeed = 2
	  	if (BossHp >= 1)
	  	{
	  		attack3();
		  	atk7();
		   	atk8();
		    atk9();
	  	}
	    boss3();
	  }
	if (BossHp <= 140)
	{
		if (yspeed >=0)
		{
			yspeed -=0.1;
		}
		if (rad >= 0)
		{
			rad -=0.3;
		}
		if (rad <= 0 && yspeed <= 0)
		{
			xpos = 1000
		}
	}
	if (BossHp >= 0)
	{
		attack4();
	}
}
  if (BossHp <= 0)
  {
  	textSize(225)
  	fill(34,255,0)
  	text('Knockout!',0,340)
	Invincibility = true
	InvincibilityTimer = 100
	gatex = 1500
	BossHp --;
	if (BossHp <= -1000)
	{
		canvasID = 2
	}
  }
  
  bossBar();
  fill(0,0,0)
  // Draw the shape
  if (IceCharge >= 4)
  {
    yspeed = 1
  } 
  else
  {
  }
  fill(0,0,255)
  ellipse(xpos, ypos, rad, rad);
  image(bossSprite,xpos,ypos,60,60)
  fill(165,242,243)
  textSize(25)
  playerDamage();
}
function atk9()
{
  if (StormIsActive == 0)
  {
    StormTimer = 5
    StormChance = int(random(0,3))
    if (StormChance == 1)
    {
      StormIsActive = 1
    }
    if (StormChance == 2)
    {
      StormIsActive = 2
    }
    if (StormChance == 0)
    {
      StormIsActive = 3
    }
  }
  if (StormIsActive == 1)
  {
    if (frameCount % 60 == 0 && StormTimer > 0)
    {
      StormTimer --;
    }
    if (StormTimer <= 0)
    {
      StormIsActive = 0
    }
    playerX -=1;
    text('<------',500,350)
  }
  if (StormIsActive == 2)
  {
    if (frameCount % 60 == 0 && StormTimer > 0)
    {
      StormTimer --;
    }
    if (StormTimer <= 0)
    {
      StormIsActive = 0
    }
    text('------>',500,350)
    playerX +=1;
  }
  if (StormIsActive == 3)
  {
    if (frameCount % 60 == 0 && StormTimer > 0)
    {
      StormTimer --;
    }
    if (StormTimer <= 0)
    {
      StormIsActive = 0
    }
  }
}
function atk8()
{
  if (SpinAttack == true)
  {
    if (Spinx >= playerX -350)
    {
      Spinx -=3;
    }
    if (Spiny <= playerY)
    {
      Spiny +=1;
    }
    if (Spiny >= playerY)
    {
      Spiny -=1;
    }
    if (Spinx <= playerX -350)
    {
      SpinAttack = false
    }
  }
  if (SpinAttack == false)
  {
    if (Spinx <= playerX +350)
    {
      Spinx +=3;
    }
    if (Spiny <= playerY)
    {
      Spiny +=1;
    }
    if (Spiny >= playerY)
    {
      Spiny -=1;
    }
    if (Spinx >= playerX +350)
    {
      SpinAttack = true
    } 
  }
  fill(0,222,255)
  ellipse(Spinx,Spiny,25,25)
}
function atk7()
{
  if (PyramidY == 100 && PyramidX > 100)
  {
    PyramidX -= PyramidSpeed
  }
  if (PyramidX == 100 && PyramidY < 600)
  {
    PyramidY += PyramidSpeed
  }
  if (PyramidY == 600 && PyramidX < 600)
  {
    PyramidX += PyramidSpeed
  }
  if (PyramidX == 600 && PyramidY > 100)
  {
    PyramidY -= PyramidSpeed
  }
  if (TringleBeam == false)
  {
    if (frameCount % 60 == 0 && PyramidRecharge > 0)
    {
      PyramidRecharge --;
      PyramidBeam = 3
    }
    if (PyramidRecharge <= 0)
    {
      TringleBeam = true
    }
  }
  if (TringleBeam == true)
  {
    if (frameCount % 60 == 0 && PyramidBeam > 0)
    {
      PyramidBeam --;
      PyramidRecharge = 3;
    }
    if (PyramidBeam >= 0)
    {
      rect(PyramidX-25,PyramidY-25,2000,50)
      rect(PyramidX-25,PyramidY-25,50,2000)
      rect(PyramidX-2000,PyramidY-25,2000,50)
      rect(PyramidX-25,PyramidY-2000,50,2000)
    }
    if (PyramidBeam <=0)
    {
      TringleBeam = false
    }
  }
  fill(0,0,0)
  if (PyramidRecharge <= 1)
  {
    fill(0,196,255)
  }
  else
  {
    fill(203,255,255)
  }
  ellipse(PyramidX,PyramidY,50,50)
}
function boss3()
{
  thirdboss = true
  if (Size3 <= 600)
  {
    Size3+=10;
  }
  if (Size3 >= 600 && Size3 <= 650)
  {
    Size3+=5;
  }
  if (Size3 >= 650 && Size3 <= 680)
  {
    Size3+=3;
  }
  if (Size3 >= 680 && Size3 <= 700)
  {
    Size3+=1;
  }
  ellipse(1000,350,Size3,Size3)

}

function playerDamage()
{
  // track hitting for all circle objects
  var dist = sqrt((playerX - icecubex2)*(playerX - icecubex2) + (playerY - icecubey2)*(playerY - icecubey2));
  var dist2 = sqrt((playerX - icecubex)*(playerX - icecubex) + (playerY - icecubey)*(playerY - icecubey));
  var dist3 = sqrt((playerX - icecubex3)*(playerX - icecubex3) + (playerY - icecubey3)*(playerY - icecubey3));
  var dist4 = sqrt((playerX - icex)*(playerX - icex) + (playerY - icey)*(playerY - icey));
  var dist5 = sqrt((playerX - xpos)*(playerX - xpos) + (playerY - ypos)*(playerY - ypos));
  var dist6 = sqrt((playerX - homeX)*(playerX - homeX) + (playerY - homeY)*(playerY - homeY));
  var dist7 = sqrt((playerX - 1000)*(playerX - 1000) + (playerY - 350)*(playerY - 350))
  var dist8 = sqrt((playerX - PyramidX)*(playerX - PyramidY) + (playerY - PyramidX)*(playerY - PyramidX));
  var dist9 = sqrt((playerX - Spinx)*(playerX - Spinx) + (playerY - Spiny)*(playerY - Spiny));
  if (bossPhase1 == true)
  {
	if (dist < 50)
	{
		deductHealth(1,30);
	}
	if (dist2 < 25)
	{
		deductHealth(1,30);
	}
	if (dist3 < 15)
	{
		deductHealth(1,30);
	}
	if (dist4 < 15)
	{
		deductHealth(1,30);
	}
	if (dist5 < 30)
  	{
  	  deductHealth(1,30);
  	}
  }
  if (bossPhase2 == true)
  {
  	if (dist6 < 25)
 	{
    	deductHealth(1,30);
 	}
  }
  if (thirdboss == true)
  {
    if(dist7 <= 340)
    {
      deductHealth(1,30)
    }
  }
  if (bossPhase3 == true)
  {
  	if (dist8 <= 25)
  	{
  		deductHealth(1,30);
  	}
 	if (dist9 <= 12.5)
  	{
  		deductHealth(1,30);
  	}
  }
  textSize(15)
  fill(255,255,255)
  if (BeamAttack == true)
  {
    if (playerX >= SkyBeamX && playerX <= SkyBeamX + 50)
    {
      if (playerY <= BeamHeight)
      {
        deductHealth(1,30);
      }
    }
  }
  if (PyramidBeam >= 0 && TringleBeam == true)
  {
  	if (playerX >= PyramidX - 25 && playerX <= PyramidX + 25)
  	{
  		deductHealth(1,30);
  	}
  	if (playerY >= PyramidY - 25 && playerY <= PyramidY + 25)
  	{
  		deductHealth(1,30);
  	}
  }


  // track if beam is hitting player
  if (IceBeamOn == true)
  {
    if (playerY > ypos-25 && playerY < ypos+25)
    {
      deductHealth(1,30);
    }
  }
  if (BeamsOn == true)
  {
    if (BeamRandom1 <= 1 && BeamDuration <= 1)
    {
      if (playerX >= 60 && playerX <= 140)
      {
        deductHealth(1,30);
      }
    }
    if (BeamRandom2 <= 1 && BeamDuration <= 1)
    {
      if (playerX >= 260 && playerX <= 340)
      {
        deductHealth(1,30);
      }
    }
    if (BeamRandom3 <= 1 && BeamDuration <= 1)
    {
      if (playerX >= 460 && playerX <= 540)
      {
        deductHealth(1,30);
      }
    }
    if (BeamRandom4 <= 1 && BeamDuration <= 1)
    {
      if (playerX >= 660 && playerX <= 740)
      {
        deductHealth(1,30);
      }
    }
    if (BeamRandom5 <= 1 && BeamDuration <= 1)
    {
      if (playerX >= 860 && playerX <= 940)
      {
        deductHealth(1,30);
      }
    }
  }
}
function bossBar()
{
  var bossDeath = false
  fill(255,196,0)
  //rect(0,650,BossHp*10,25)


}
function atk6()
{
  if (BeamsOn == false)
  {
    BeamRandom5 = int(random(0,3))
    BeamRandom4 = int(random(0,3))
    BeamRandom3 = int(random(0,3))
    BeamRandom2 = int(random(0,3))
    BeamRandom1 = int(random(0,3))
    BeamDuration = 3;
  }
  if (frameCount % 60 == 0 && BeamCountDown > 0)
  {
    BeamCountDown --;
  }
  if (BeamCountDown <= 0)
  {
    BeamsOn = true
  }
  if (BeamsOn == true)
  {
    BeamCountDown = 1;
    if (frameCount % 60 == 0 && BeamDuration > 0)
    {
      BeamDuration --;
    }
    if (BeamDuration <= 0)
    {
      BeamsOn = false
    }
  }
  if (BeamsOn == true)
  {
    if (BeamRandom1 <= 1)
    {
      fill(24,0,255)
      rect(0,0,200,25)
      if (BeamDuration <= 1)
      {
        fill(0,255,255)
        rect(60,0,80,1000)
      }
    }
    if (BeamRandom2 <= 1)
    {
      fill(24,0,255)
      rect(200,0,200,25)
      if (BeamDuration <= 1)
      {
        fill(0,255,255)
        rect(260,0,80,1000)
      }
    }
    if (BeamRandom3 <= 1)
    {
      fill(24,0,255)
      rect(400,0,200,25)
      if (BeamDuration <= 1)
      {
        fill(0,255,255)
        rect(460,0,80,1000)
      }
    }
    if (BeamRandom4 <= 1)
    {
      fill(24,0,255)
      rect(600,0,200,25)
      if (BeamDuration <= 1)
      {
        fill(0,255,255)
        rect(660,0,80,1000)
      }
    }
    if (BeamRandom5 <= 1)
    {
      fill(24,0,255)
      rect(800,0,200,25)
      if (BeamDuration <= 1)
      {
        fill(0,255,255)
        rect(860,0,80,1000)
      }
    }
  }
  fill(255,255,255)
}
function atk5()
{
  if (homeX >= playerX)
  {
    homeX -= homeSpeed
  }
  if (homeX <= playerX)
  {
    homeX += homeSpeed
  }
  if (homeY >= playerY)
  {
    homeY -= homeSpeed
  }
  if (homeY <= playerY)
  {
    homeY += homeSpeed
  }
  fill(104,215,255)
  ellipse(homeX,homeY,Size,Size)
}
function attack3()
{
    // Update the position of the shape
  icex = icex + IcePower + icebounce * icecubemovex;
  icey = icey + IcePower + icebounce * icecubemovey;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (icex > width - rad || icex < rad) {
    icecubemovex *= -1;
  }
  if (icey > height - rad || icey < rad) {
    icecubemovey *= -1;
  }
  fill(162,247,255)
  ellipse(icex,icey,25,25)
  IcePower = int(random())

}
function attack1()
{
  if (IceBeamOn == true)
  {
    yspeed = 1
    if (frameCount % 60 == 0 && IceBeamTick > 0)
    {
      IceBeamTick --;
      IceCharge = int(random(1,3))
    }
    if (IceBeamTick == 0)
    {
      IceBeamOn = false
    }
  }
  if (IceBeamOn == false)
  {
    yspeed = 3
    if (frameCount % 60 == 0 && IceCharge < 5)
    {
      IceCharge ++;
    }
    if (IceCharge >= 5)
    {
      IceBeamOn = true
      IceBeamTick = int(random(0,3))
    }
  }

  if (IceBeamTick > 0)
  {
    fill(0,222,255)
    rect(xpos,ypos-25,1000,50)
  }
}
function attack2()
{
  if (iceCubeIsOnScreen == false)
  {
    icecubex = 50;
    iceCubeIsOnScreen = true;
    icecubey = ypos - 25;
    fill(165,242,243)
    ellipse(icecubex,icecubey,50,50)              
  }
  else
  {
    icecubex = icecubex + icespeed * icecubemove
    fill(165,242,243)
    ellipse(icecubex,icecubey,50,50);  
    if (icecubex > 1000)
    {
      iceCubeIsOnScreen = false;
    }
  }
  if (iceCubeIsOnScreen2 == false)
  {
    icecubex2 = 50;
    icecubey2 = ypos -50;
    iceCubeIsOnScreen2 = true;
    fill(165,242,243)
    ellipse(icecubex2,icecubey2,75,75)
  }
  else
  {
    icecubex2 = icecubex2 + icespeed2 * icecubemove
    fill(165,242,243)
    ellipse(icecubex2,icecubey2,100,100);
    if (icecubex2 > 1000)
    {
      iceCubeIsOnScreen2 = false
    }
  }
  if (iceCubeIsOnScreen3 == false)
  {
    icecubex3 = 50;
    icecubey3 = ypos -10;
    iceCubeIsOnScreen3 = true;
    fill(165,242,243)
    ellipse(icecubex3,icecubey3,25,25)
  }
  else
  {
    icecubex3 = icecubex3 + icespeed3 * icecubemove
    fill(165,242,243)
    ellipse(icecubex3,icecubey3,25,25);
    if (icecubex3 > 1000)
    {
      iceCubeIsOnScreen3 = false
    }
  }
}
function attack4()
{
  var BeamTrigger = 0
    fill(0,239,255)
  if (BeamMove == true)
  {
    if (playerX >= SkyBeamX + 15)
    {
      SkyBeamX +=1;
    }
    if (playerX <= SkyBeamX + 16)
    {
      SkyBeamX -=1;
    }
    if (SkyBeamX + 15 <= playerX && SkyBeamX + 20 >= playerX)
    {
      BeamAttack = true
    }
  }
  if (BeamAttack == true)
  {
    BeamMove = false
    if (BeamHeight <= 750)
    {
      if (BeamHeight <= 100)
      {
        BeamHeight +=2.5
      }
      if (BeamHeight <= 200 && BeamHeight >= 100)
      {
        BeamHeight +=7.5
      }
      if (BeamHeight >= 200)
      {
        BeamHeight +=15;
      }
    }
    if (BeamHeight >= 750)
    {
      HomeFlake = true
      BeamAttack = false;
    }
  }
  if (BeamAttack == false)
  {
    if (BeamHeight >= 0)
    {
      BeamHeight -=10;
    }
    if (BeamHeight <= 0)
    {
      BeamMove = true
    }
  }
    fill(0,239,255)
    rect(SkyBeamX,SkyBeamY,50,BeamHeight)
    fill(178,178,178)
    rect(SkyBeamX-75,0,200,50)
}
function keyPressed()
{
  if (key == 'w' || key == 'W')
  {
    up = true;
  }
  if (key == 'd' || key == 'D')
  {
    right = true;
  }
  if (key == 'a' || key == 'A')
  {
    left = true;
  }
  if (key == 's' || key == 'S')
  {
    down = true;
  }
}
