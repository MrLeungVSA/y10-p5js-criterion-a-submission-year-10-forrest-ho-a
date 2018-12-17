
function setupwinscreen()
{
}
function drawwinscreen()
{
	fill(171,245,255)
	rect(0,0,1000,700)
	fill(0,0,0)
	textSize(100)
	text('You Win!',350,100)
	textSize(30)
	if (BossHp <= -400)
	{
		text('Time: ' + gameDuration + ' Seconds',400,300)
	}
	if (BossHp <= -500)
	{
		text('Health: ' + health + '/5',400,350)
	}
	if (BossHp <= -550)
	{
		text('Correct answers: ' + correctAnswers,400,400)
	}
	if (BossHp <= -800)
	{
		canvasID = 3;
	}
	//if (BossHp <= -)
	fill(0,0,0)
	
}