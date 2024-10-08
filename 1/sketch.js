let cloudSize=150;
let dreamColor;
let starX,starY,starSize;
let targetX,targetY;
let speed=2;
let moving=false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  starX=width/2;
  starY=height/2;
  starSize=0;
  dreamColor=color(255);
}

function draw() {
  background(50,50,100); // Night themed background

  // Cloud in the center of the window
  fill(255);
  noStroke();
  ellipse(width / 2, height / 2, cloudSize, cloudSize / 2);
  ellipse(width / 2 - 40, height / 2 + 20, cloudSize / 1.5, cloudSize / 3);
  ellipse(width / 2 + 40, height / 2 + 20, cloudSize / 1.5, cloudSize / 3);

  // Move the star towards the cloud
  if (moving) {
    let distToCloud=dist(starX,starY,targetX,targetY);
    if (distToCloud>1) {
      // Move the star toward the center of the cloud
      let angle=atan2(targetY-starY,targetX-starX);
      starX += cos(angle)*speed;
      starY += sin(angle)*speed;
    } else {
      // Once the star reaches the cloud, make it disappear
      starSize=0;
      moving=false;
    }
  }

  // Display the star
  fill(dreamColor);
  noStroke();
  ellipse(starX,starY,starSize);
}

// When the mouse is pressed, create a new star and make it travel to the cloud
function mousePressed() {
  starX=mouseX;
  starY=mouseY;
  starSize=random(20,80);
  dreamColor=color(random(255),random(255),random(255));

  // Target to the center of the cloud
  targetX=width / 2;
  targetY=height / 2;

  // Start moving the star
  moving=true;
}
