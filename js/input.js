$(document).keydown(function (event) {
    velocityX = 0; velocityY = 0; 
    var success = false;
    switch (event.which) {
        case 37: //LEFT
            if (maze[pacman.y][pacman.x - 1] == 1) {
                velocityY = 0;
                velocityX = 0;
                break;
            }
            if (pacman.y == 11 && pacman.x == 0) {
                success = true;
                velocityX = 0;
                maze[pacman.y][pacman.x] = 3;
                pacman.x = 19;
                break;
            }
            success = true;
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
            success = true;
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
            success = true;
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
            success = true;
            velocityX = 0;
            velocityY = 1;
            maze[pacman.y][pacman.x] = 3;
            // pacman.y += 1;
            break;
    };
    if (success) {
        movePacman();
    }
    drawWorld();
    if (loseTheGame()) {
        maze[pacman.y][pacman.x] = 5;
        drawWorld();
        var name = prompt("You Lose");
        while (name == null || name == "") {
            name = prompt("You Lose");
        }
        addScoreBoard(name);
        $(this).off("keydown");
        showScoreBoard();
        return;
    }
    if (winTheGame()) {
        drawWorld();
        var name = prompt("You Win");
        while (name == null || name == "") {
            name = prompt("You Win");
        }
        addScoreBoard(name);
        $(this).off("keydown");
        showScoreBoard();
        return;
    }

    if (success) {
        moveGhost(ghost1);
        moveGhost(ghost2);
        moveGhost(ghost3);
        moveGhost(ghost4);
        drawWorld();
    }
    if (loseTheGame()) {
        maze[pacman.y][pacman.x] = 5;
        drawWorld();
        var name = prompt("You Lose");
        while (name == null || name == "") {
            name = prompt("You Lose");
        }
        addScoreBoard(name);
        $(this).off("keydown");
        showScoreBoard();
        return;
    }
});