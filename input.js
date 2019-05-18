$(document).keydown(function (event) {
    switch (event.which) {
        case 37: //LEFT
            if (maze[pacman.y][pacman.x - 1] == 1) {
                break;
            }
            maze[pacman.y][pacman.x] = 3;
            pacman.x -= 1;
            addScore();
            maze[pacman.y][pacman.x] = 4;
            showScore();
            drawWorld();
            break;
        case 38:
            if (maze[pacman.y-1][pacman.x] == 1) {
                break;
            }
            maze[pacman.y][pacman.x] = 3;
            pacman.y -= 1;
            addScore();
            maze[pacman.y][pacman.x] = 4;
            showScore();
            drawWorld();
            break;
        case 39:
            if (maze[pacman.y][pacman.x+1] == 1) {
                break;
            }
            maze[pacman.y][pacman.x] = 3;
            pacman.x += 1;
            addScore();
            maze[pacman.y][pacman.x] = 4;
            showScore();
            drawWorld();
            break;
        case 40:
            if (maze[pacman.y+1][pacman.x] == 1) {
                break;
            }
            maze[pacman.y][pacman.x] = 3;
            pacman.y += 1;
            addScore();
            maze[pacman.y][pacman.x] = 4;
            showScore();
            drawWorld();
            break;
    }
});