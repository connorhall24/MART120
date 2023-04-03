let bodyX = 200;
let bodyY = 185;
let bodySpeed = 2;
let captionSize = 16;
let captionGrow = true;

function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(90, 221, 159);

    //Caption
    textSize(captionSize);
    text("Shred the Mountain", 10, 140);

    // Grow and shrink caption
    if (captionGrow) {
        captionSize += 1;
        if (captionSize >= 80) {
            captionGrow = false;
        }
    } else {
        captionSize -= 1;
        if (captionSize <= 16) {
            captionGrow = true;
        }
    }

    //head
    let headX = map(sin(frameCount * 0.05), -1, 1, 225, 275);
    let headY = 100;
    fill(255, 204, 0);
    circle(headX, headY, 175);

    //hat
    fill(148, 187, 191)
    triangle(headX - 70, headY - 60, headX, headY - 100, headX + 70, headY - 60);

    // eyes
    strokeWeight(10);
    fill(0);
    point(headX - 50, headY - 25);
    point(headX + 35, headY - 25);

    // nose
    point(headX - 5, headY - 10);

    // mouth
    ellipse(headX - 5, headY + 35, 30, 45);

    // body
    fill(221, 71, 19);
    rect(bodyX, bodyY, 100, 150);

    if (bodyX > width - 100 || bodyX < 0) {
        bodySpeed = -bodySpeed;
    }
    if (bodyY > height - 150 || bodyY < 0) {
        bodySpeed = -bodySpeed;
    }
    bodyX += bodySpeed;
    bodyY += bodySpeed;

    // right arm
    let rightArmY = map(sin(frameCount * 0.1), -1, 1, 195, 215);
    fill(113, 39, 181);
    rect(300, rightArmY, 50, 20);

    // left arm
    let leftArmY = map(sin(frameCount * 0.12), -1, 1, 195, 215);
    fill(113, 39, 181);
    rect(150, leftArmY, 50, 20);

    // left leg
    fill(221, 71, 19);
    rect(200, 335, 10, 50);

    // right leg
    fill(221, 71, 19);
    rect(290, 335, 10, 50);

    //snowboard
    let snowboardX = map(sin(frameCount * 0.08), -1, 1, 200, 400);
    fill(181, 110, 39)
    ellipse(snowboardX, 400, 350, 20);

    //name
    fill(120);
    textSize(22);
    text("Connor Hall", 270, 500);
}
