function preload() {
    
}

function setup() {
createCanvas(1740, 650);
img = "https://bigseventravel.com/wp-content/uploads/2021/06/Leaning-tower-of-pisa.jpg";
}

function draw() {
  
  stroke(50, 255, 50);
  strokeWeight(5);
  fill(120, 255, 128);
circle(100, 100, 100);
  stroke(85,83, 255);
  strokeWeight(9);
  fill(100, 140, 255);
  rect(150, 75, 700, 50);
fill(255, 99, 99);
  stroke(255, 0, 0);
  strokeWeight(5);
  circle(850, 100, 100);
  stroke(85,83, 255);
  strokeWeight(9);
  fill(100, 140, 255);
  rect(900, 75, 700, 50);
  stroke(50, 255, 50);
  strokeWeight(5);
  fill(120, 255, 128);
circle(1640, 100, 100);
stroke(85,83, 255);
  strokeWeight(9);
  fill(100, 140, 255);
  rect(75, 150, 50, 350);
  stroke(50, 255, 50);
  strokeWeight(5);
  fill(120, 255, 128);
circle(100, 550, 100);
stroke(85,83, 255);
strokeWeight(9);
fill(100, 140, 255);
rect(150, 525, 700, 50);
fill(255, 99, 99);
  stroke(255, 0, 0);
  strokeWeight(5);
  circle(850, 550, 100);
  stroke(85,83, 255);
  strokeWeight(9);
  fill(100, 140, 255);
  rect(900, 525, 700, 50);
  stroke(50, 255, 50);
  strokeWeight(5);
  fill(120, 255, 128);
circle(1640, 550, 100);
stroke(85,83, 255);
  strokeWeight(9);
  fill(100, 140, 255);
  rect(1615, 150, 50, 350);
}

function take_snapshot(){
  save('snapshot.png');
}