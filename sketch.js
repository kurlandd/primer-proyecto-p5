let w = 400;
let h = 600;

function setup() {
    //createCanvas(w, h);
    createCanvas(windowWidth, windowHeight);
    background('red');
}

function draw() {
    background(000);
    strokeWeight(40);
    stroke('red');
    //noStroke();
    fill('white');
    //rect(0, 0, 100, 100);
    ellipse(width / 2, height / 2, 100);
    strokeWeight(1);
    noFill();
    ellipse(mouseX, mouseY, 50);
    noFill();
    //stroke('chartreuse');
    stroke(20, mouseX, mouseY);
    strokeWeight(1);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
