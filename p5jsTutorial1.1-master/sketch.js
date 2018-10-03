function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(900,700);
  
}

function draw()
{
  //create a background using RGB values
  background(0,255,237)

  // change the paint brush to a specific color according to RGB values
  fill(255,0,0);

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50

  fill(175,255,253)
  rect(0,0,50,50)
  rect(0,650,50,50)
  rect(850,0,50,50)
  rect(850,650,50,50)
  fill(199,199,199)
  rect(225,175,450,350)

  fill(255,0,0)


  rect(275,200,150,20);
  rect(275,200,20,300);
  rect(275,350,100,20);

  rect(450,200,20,300);
  rect(450,350,150,20);
  rect(600,200,20,300);
    
}