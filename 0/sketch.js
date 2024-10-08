function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);  
}

function draw() {
  background(0); 
  
  translate(width/2, height/2);
  rotate(-90);
  
  let hr=hour();
  let mn=minute();
  let sc=second();
  
  strokeWeight(8);
  stroke(255);
  noFill();
  ellipse(0,0,400,400);
  
  let secondAngle=map(sc,0,60,0,360);
  stroke(255, 0, 0);
  strokeWeight(4);
  line(0,0,150*cos(secondAngle),150*sin(secondAngle));
  
  let minuteAngle = map(mn,0,60,0,360);
  stroke(255);
  strokeWeight(6);
  line(0, 0, 120 * cos(minuteAngle), 120 * sin(minuteAngle));
  
  let hourAngle = map(hr%12,0,12,0,360);
  stroke(100,255,100);
  strokeWeight(8);
  line(0,0,90*cos(hourAngle),90*sin(hourAngle));
  
  stroke(255);
  point(0,0);
  
  strokeWeight(2);
  for (let i=0; i<360; i+=30) {
    let x1=180*cos(i);
    let y1=180*sin(i);
    let x2=160*cos(i);
    let y2=160*sin(i);
    stroke(255);
    line(x1,y1,x2,y2);
  }
}