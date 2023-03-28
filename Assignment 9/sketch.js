// JavaScript source code
function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(90, 221, 159);
    textSize(16)
    text("Shred the Mountain", 10, 140);

    //head
    fill(255, 204, 0);
    circle(250, 100, 175);

    //hat
    fill(148, 187, 191)
    triangle(180, 40, 250, 0, 320, 40);

  
    // eyes
    strokeWeight(10);
    fill(0);
    point(200, 75);
    point(285, 75);

    // nose
    point(245, 90);

    // mouth
    ellipse(245, 135, 30, 45)

    // body
    fill(221, 71, 19);
    rect(200, 185, 100, 150);

    // right arm
    fill(113, 39, 181);
    rect(300, 195, 50, 20);
    // left arm
    rect(150, 195, 50, 20);
    // left leg
    rect(200, 335, 10, 50);
    // right leg
    rect(290, 335, 10, 50);

    //snowboard
    fill(181, 110, 39)
    ellipse(250, 400, 350, 20);

    fill(120);
    textSize(22);
    text("Connor Hall", 270, 500);


}