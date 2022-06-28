function generator(n, m) {
    let matrix = [];
    for (let i = 0; i < m; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }
    return (matrix);
}

function movement() {
    if (going == "up") {
        x = snake[0][0];
        y = snake[0][1] - 1;
        if (y >= 0 || y == -1) {
            snake.unshift([x, y]);
            n = snake.pop();
            x1 = n[0];
            y1 = n[1];
            matrix[y1][x1] = 0;
        }
    }
    if (going == "down") {
        x = snake[0][0];
        y = snake[0][1] + 1;
        if (y < wid || y == 20) {
            snake.unshift([x, y]);
            n = snake.pop();
            x1 = n[0];
            y1 = n[1];
            matrix[y1][x1] = 0;
        }
    }
    if (going == "left") {
        x = snake[0][0] - 1;
        y = snake[0][1];
        if (x >= 0 || x == -1) {
            snake.unshift([x, y]);
            n = snake.pop();
            x1 = n[0];
            y1 = n[1];
            matrix[y1][x1] = 0;
        }
    }
    if (going == "right") {
        x = snake[0][0] + 1;
        y = snake[0][1];
        if (x < hei || x == 20) {
            snake.unshift([x, y]);
            n = snake.pop();
            x1 = n[0];
            y1 = n[1];
            matrix[y1][x1] = 0;
        }
    }
}

function randomnumbeetwen(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function scoreText() {
    document.getElementById("score").innerHTML = "Score: " + score;
}

function coinText() {
    document.getElementById("coin").innerHTML = "Coin: " + fullscore;
}

function easylvl() {
    if (gamestart == 0) {
        frameRate(5);
        lvl = "easy";
        gamestart = 1;
    }
}

function mediumlvl() {
    if (gamestart == 0) {
        frameRate(15);
        lvl = "medium";
        gamestart = 1;
    }
}

function hardlvl() {
    if (gamestart == 0) {
        frameRate(25);
        lvl = "hard";
        gamestart = 1;
    }
}

function clearwalls() {

    xwall = snake[0][0] - 1;
    ywall = snake[0][1];
    if (xwall == -1 && x >= 0) {
        snake.shift();
        snake.unshift([x + hei - 2, y]);
    }

    xwall = snake[0][0] + 1;
    ywall = snake[0][1];
    if (xwall == 20) {
        snake.shift();
        snake.unshift([0 + 1, y]);
    }

    xwall = snake[0][0];
    ywall = snake[0][1] + 1;
    if (ywall == 20) {
        snake.shift();
        snake.unshift([x, 0 + 1]);
    }

    xwall = snake[0][0];
    ywall = snake[0][1] - 1;
    if (ywall == -1) {
        snake.shift();
        snake.unshift([x, y + wid - 2]);
    }

}

function border() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i == 0 || j == 0 || i == hei - 1 || j == wid - 1) {
                matrix[i][j] = 4;
            }
        }
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW && going != "down") {
        going = "up";
    } else if (keyCode === DOWN_ARROW && going != "up") {
        going = "down";
    } else if (keyCode === LEFT_ARROW && going != "right") {
        going = "left";
    } else if (keyCode === RIGHT_ARROW && going != "left") {
        going = "right";
    }
}

function matrixcolor() {
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][i] == 0) {
                fill("gray");
            }
            if (matrix[j][i] == 1) {
                fill("#40916c");
            }
            if (matrix[j][i] == 3) {
                fill("#2d6a4f");
            }
            if (matrix[j][i] == 2) {
                fill("red")
            }
            if (matrix[j][i] == 4) {
                fill("black");
            }
            rect(i * side, j * side, side, side);
        }
    }
}

function foodcreate() {
    if (snake[0][0] == food[0] && snake[0][1] == food[1]) {
        food.pop();
        food = [randomnumbeetwen(1, matrix.length - 1), randomnumbeetwen(1, matrix[0].length - 1)]
    }

}

function scoreaudio() {
    document.getElementById("scoreaudio").play();
}

function pointaudio() {
    document.getElementById("pointaudio").play();
}

function scorelvl() {
    if (snake[0][0] == food[0] && snake[0][1] == food[1]) {
        if (lvl == "easy") {
            score++;
            scoreaudio();
            snake.unshift([x, y]);
        } else if (lvl == "medium") {
            score += 2;
            scoreaudio();
            snake.unshift([x, y]);
        } else if (lvl == "hard") {
            score += 3;
            scoreaudio();
            snake.unshift([x, y]);
        }
        if (score % 30 == 0) {
            pointaudio();
        }
        foodcreate();
    }
}

function snakehead() {
    if (snake) {
        tempx = snake[0][0];
        tempy = snake[0][1];
        matrix[tempy][tempx] = 3;
    }
}

function snakecolor() {
    for (let i = 1; i < snake.length; i++) {
        x = snake[i][0];
        y = snake[i][1];
        matrix[y][x] = 1;
    }
}

function foodcolor() {
    matrix[food[1]][food[0]] = 2;
}

function startsnake() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i == Math.floor(matrix.length / 2) && j == Math.floor(matrix[0].length / 2)) {
                snake[0] = [i, j];
                snake[1] = [i + 1, j];
                snake[2] = [i + 2, j];
                snake[3] = [i + 3, j];
                snake[4] = [i + 4, j];
            }
        }
    }
}

function headattack() {
    let headx = snake[0][0];
    let heady = snake[0][1];
    if (matrix[heady][headx] == 1) {
        gamestart = 0;
        endgame = 1;
        document.getElementById("score").innerHTML = "Game Over! Your score is: " + score;
        document.getElementById("text-start").innerHTML = "Choose gamemode and click \"Start again\"";
        lvl = undefined;
    }
}

function deletetext() {
    let elementExists = document.getElementById("text-start");
    if (elementExists) {
        document.getElementById("text-start").innerHTML = "";
    }
}

function start() {
    if (lvl != undefined) {
        endgame = 0;


        if (lvl != undefined && endgame == 0) {
            matrix = generator(20, 20);
            snake = [];
            score = 0;
            gamestart = 1;
            going = "left";
            food = [randomnumbeetwen(1, matrix.length - 1), randomnumbeetwen(1, matrix[0].length - 1)]
            startsnake();
        }
    }
}