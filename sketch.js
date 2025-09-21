let angle = 0;
function setup() {
  createCanvas(400, 400);
  background(30);
  noFill();
  stroke(255);
}

function draw() {
  translate(width / 2, height / 2);
  let r = frameCount * 0.5;
  ellipse(r * cos(angle), r * sin(angle), 20, 20);
  angle += 0.1;
}