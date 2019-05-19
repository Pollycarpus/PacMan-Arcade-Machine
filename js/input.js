$(document).keydown(function (event) {
    velocityX = 0; velocityY = 0;
    switch (event.which) {
        case 37: //LEFT
            if (maze[pacman.y][pacman.x - 1] == 1) {
                velocityY = 0;
                velocityX = 0;
                break;
            }
            if (pacman.y == 11 && pacman.x == 0) {
                velocityX = 0;
                maze[pacman.y][pacman.x] = 3;
                pacman.x = 19;
                break;
            }
            velocityY = 0;
            velocityX = -1;
            maze[pacman.y][pacman.x] = 3;
            break;
        case 38: //UP
            if (maze[pacman.y-1][pacman.x] == 1) {
                velocityY = 0;
                velocityX = 0;
                break;
            }
            velocityX = 0;
            velocityY = -1;
            maze[pacman.y][pacman.x] = 3;
            // pacman.y -= 1;
            break;
        case 39: //RIGHT
            if (maze[pacman.y][pacman.x+1] == 1) {
                velocityY = 0;
                velocityX = 0;
                break;
            }
            if (pacman.y == 11 && pacman.x == 19) {
                velocityX = 0;
                maze[pacman.y][pacman.x] = 3;
                pacman.x = 0;
                break;
            }
            velocityX = 1;
            velocityY = 0;
            maze[pacman.y][pacman.x] = 3;
            // pacman.x += 1;
            break;
        case 40: //DOWN
            if (maze[pacman.y+1][pacman.x] == 1) {
                velocityY = 0;
                velocityX = 0;
                break;
            }
            velocityX = 0;
            velocityY = 1;
            maze[pacman.y][pacman.x] = 3;
            // pacman.y += 1;
            break;
    };
    movePacman();
    drawWorld();
    if (loseTheGame()) {
        maze[pacman.y][pacman.x] = 5;
        drawWorld();
        var name = prompt("You Lose");
        while (name == null || name == "") {
            name = prompt("You Lose");
        }
        $(this).off("keydown");
        return;
    }
    if (winTheGame()) {
        drawWorld();
        var name = prompt("You Win");
        while (name == null || name == "") {
            name = prompt("You Win");
        }
        $(this).off("keydown");
        return;
    }

    moveGhost();
    if (loseTheGame()) {
        maze[pacman.y][pacman.x] = 5;
        drawWorld();
        var name = prompt("You Lose");
        while (name == null || name == "") {
            name = prompt("You Lose");
        }
        $(this).off("keydown");
        return;
    }
});