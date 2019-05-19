$(document).keydown(function (event) {
    velocityX = 0; velocityY = 0; 
    var success = false; var direction = 3;
    switch (event.which) {
        case 37: //LEFT
            if (maze[pacman.y][pacman.x - 1] == 1) {
                direction = 1;
                velocityY = 0;
                velocityX = 0;
                break;
            }
            if (pacman.y == 11 && pacman.x == 0) {
                success = true; direction = 1;
                velocityX = 0;
                maze[pacman.y][pacman.x] = 3;
                pacman.x = 19;
                break;
            }
            success = true; direction = 1;
            velocityY = 0;
            velocityX = -1;
            maze[pacman.y][pacman.x] = 3;
            break;
        case 38: //UP
            if (maze[pacman.y-1][pacman.x] == 1) {
                direction = 2;
                velocityY = 0;
                velocityX = 0;
                break;
            }
            success = true; direction = 2;
            velocityX = 0;
            velocityY = -1;
            maze[pacman.y][pacman.x] = 3;
            break;
        case 39: //RIGHT
            if (maze[pacman.y][pacman.x+1] == 1) {
                direction = 3;
                velocityY = 0;
                velocityX = 0;
                break;
            }
            if (pacman.y == 11 && pacman.x == 19) {
                success = true; direction = 3;
                velocityX = 0;
                maze[pacman.y][pacman.x] = 3;
                pacman.x = 0;
                break;
            }
            success = true; direction = 3;
            velocityX = 1;
            velocityY = 0;
            maze[pacman.y][pacman.x] = 3;
            break;
        case 40: //DOWN
            if (maze[pacman.y+1][pacman.x] == 1) {
                direction = 4;
                velocityY = 0;
                velocityX = 0;
                break;
            }
            success = true; direction = 4;
            velocityX = 0;
            velocityY = 1;
            maze[pacman.y][pacman.x] = 3;
            break;
    };
    if (success) {
        movePacman();
    }
    drawWorld();
    if (direction == 1) leftPacman();
    else if (direction == 2) upPacman();
    else if (direction == 3) rightPacman();
    else if (direction == 4) downPacman();

    if (loseTheGame()) {
        maze[pacman.y][pacman.x] = 5;
        drawWorld();
        var name = prompt("You Lose.. Enter your name");
        while (name == null || name == "") {
            name = prompt("You Lose.. Enter your name");
        }
        addScoreBoard(name);
        $(this).off("keydown");
        showScoreBoard();
        gameOver();
        return;
    }
    if (winTheGame()) {
        drawWorld();
        var name = prompt("You Win! Enter your name");
        while (name == null || name == "") {
            name = prompt("You Win! Enter your name");
        }
        addScoreBoard(name);
        $(this).off("keydown");
        showScoreBoard();
        gameOver();
        return;
    }
    if (success) {
        moveGhost(ghost1);
        moveGhost(ghost2);
        moveGhost(ghost3);
        moveGhost(ghost4);
        drawWorld();
        if (direction == 1) leftPacman();
        else if (direction == 2) upPacman();
        else if (direction == 3) rightPacman();
        else if (direction == 4) downPacman();
    }
    if (loseTheGame()) {
        maze[pacman.y][pacman.x] = 5;
        drawWorld();
        var name = prompt("You Lose.. Enter your name");
        while (name == null || name == "") {
            name = prompt("You Lose.. Enter your name");
        }
        addScoreBoard(name);
        $(this).off("keydown");
        showScoreBoard();
        gameOver();
        return;
    }
});