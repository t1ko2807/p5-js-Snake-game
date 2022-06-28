let matrix = generator(20, 20);

let snake = [];

let endgame = 0;
let hei = matrix.length;
let wid = matrix[0].length;
let going = "left";
let skin = 1;


let gamestart = 0;


startsnake();

const side = 30;
let score = 0;
let lvl;

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("gray");
    frameRate(5);
}

let food = [randomnumbeetwen(1, matrix.length - 1), randomnumbeetwen(1, matrix[0].length - 1)]

function draw() {
    if (gamestart == 1 && endgame == 0) {
        deletetext();
        clearwalls();
        foodcolor();
        scoreText();
        scorelvl();
        snakehead();
        snakecolor();
        matrixcolor();
        foodcreate();
        movement();
        keyPressed();
        headattack();
        border();
    }
}