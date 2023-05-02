// define variables for player and obstacles
var playerX = 100;
var playerY = 100;
var playerSize = 25;
var playerSpeed = 5;
var w = 38; // key code for up arrow
var s = 40; // key code for down arrow
var a = 37; // key code for left arrow
var d = 39; // key code for right arrow

var obstacles = []; // array to hold obstacles
var obstacleCount = 2; // number of obstacles to create
var obstacleSize = [30, 50]; // array of obstacle sizes
var obstacleColors = ["red", "green"]; // array of obstacle colors
var obstacleSpeeds = [2, 4]; // array of obstacle speeds

var exitX = 450;
var exitY = 550;
var exitSize = 50;

var newObstacleX;
var newObstacleY;
class Shape {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}

var player = new Shape(width / 2, height / 2, playerSize, color(255, 0, 0));


function setup() {
    createCanvas(500, 600);
    // create the player
    player = new Shape(width / 2, height / 2, playerSize, color(255, 165, 0));
    // create the obstacles
    for (var i = 0; i < obstacleCount; i++) {
        createObstacle(i);
    }
    // create the borders
    strokeWeight(10);
    stroke(0);
    noFill();
    rect(0, 0, width, height);

    // create the exit
    fill(0, 255, 0);
    rect(exitX, exitY, exitSize, exitSize);
}

function draw() {
    background(220);
    // move the player
    movePlayer();
    // draw the player
    player.x = playerX;
    player.y = playerY;
    player.display();
    // move the obstacles and draw them
    for (var i = 0; i < obstacles.length; i++) {
        moveObstacle(i);
        drawObstacle(i);
    }
    // check if the player has reached the exit
    if (player.x + player.size > exitX && player.y + player.size > exitY) {
        textSize(32);
        textAlign(CENTER);
        fill(0);
        text("You Win!", width / 2, height / 2);
    }
    // draw the exit
    fill(0, 255, 0);
    rect(exitX, exitY, exitSize, exitSize);
}



function movePlayer() {
    if (keyIsDown(w) && playerY > 0) {
        playerY -= playerSpeed;
    }
    if (keyIsDown(s) && playerY < height - playerSize) {
        playerY += playerSpeed;
    }
    if (keyIsDown(a) && playerX > 0) {
        playerX -= playerSpeed;
    }
    if (keyIsDown(d) && playerX < width - playerSize) {
        playerX += playerSpeed;
    }
}

function createObstacle(i) {
    // create a new obstacle object
    var obstacle = new Shape(random(width), random(height),
        obstacleSize[Math.floor(Math.random() * obstacleSize.length)],
        obstacleColors[Math.floor(Math.random() * obstacleColors.length)]);
    obstacle.speed = obstacleSpeeds[Math.floor(Math.random() * obstacleSpeeds.length)];
    obstacles.push(obstacle);
}


function drawObstacle(index) {
    obstacles[index].display();
}


function moveObstacle(index) {
    // move the obstacle
    obstacles[index].x += obstacles[index].speed;
    // if the obstacle goes off the screen, wrap it around
    if (obstacles[index].x > width + obstacles[index].size) {
        obstacles[index].x = -obstacles[index].size;
        obstacles[index].y = random(height);
    } else if (obstacles[index].x < -obstacles[index].size) {
        obstacles[index].x = width + obstacles[index].size;
        obstacles[index].y = random(height);
    }
    if (obstacles[index].y > height + obstacles[index].size) {
        obstacles[index].y = -obstacles[index].size;
        obstacles[index].x = random(width);
    } else if (obstacles[index].y < -obstacles[index].size) {
        obstacles[index].y = height + obstacles[index].size;
        obstacles[index].x = random(width);
    }
}

function mouseClicked() {
    // add a new obstacle where the mouse was clicked
    var obstacle = new Shape(newObstacleX, newObstacleY,
        obstacleSize[Math.floor(Math.random() * obstacleSize.length)],
        obstacleColors[Math.floor(Math.random() * obstacleColors.length)]);
    obstacle.speed = obstacleSpeeds[Math.floor(Math.random() * obstacleSpeeds.length)];
    obstacles.push(obstacle);
    newObstacleX = mouseX;
    newObstacleY = mouseY;
    createObstacle(obstacles.length);

}

