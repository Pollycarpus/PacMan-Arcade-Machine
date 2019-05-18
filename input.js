$(document).keydown(function (event) {
    switch (event.which) {
        case 37: //LEFT
            if (maze[pacman.y][pacman.x - 1] == 1) {
                break;
            }
            if (pacman.y == 11 && pacman.x == 0) {
                maze[pacman.y][pacman.x] = 3;
                pacman.x = 19;
                break;
            }
            maze[pacman.y][pacman.x] = 3;
            pacman.x -= 1;
            break;
        case 38: //UP
            if (maze[pacman.y-1][pacman.x] == 1) {
                break;
            }
            maze[pacman.y][pacman.x] = 3;
            pacman.y -= 1;
            break;
        case 39: //RIGHT
            if (maze[pacman.y][pacman.x+1] == 1) {
                break;
            }
            if (pacman.y == 11 && pacman.x == 19) {
                maze[pacman.y][pacman.x] = 3;
                pacman.x = 0;
                break;
            }
            maze[pacman.y][pacman.x] = 3;
            pacman.x += 1;
            break;
        case 40:
            if (maze[pacman.y+1][pacman.x] == 1) {
                break;
            }
            maze[pacman.y][pacman.x] = 3;
            pacman.y += 1;
            break;
    };
    addScore();
    showScore();
    maze[pacman.y][pacman.x] = 4;
    if (loseTheGame()) {
        maze[pacman.y][pacman.x] = 5;
        drawWorld();
        alert("You Lose");
        $(this).off("keydown");
        return;
    }
    if (winTheGame()) {
        drawWorld();
        alert("You Win")
        $(this).off("keydown");
        return;
    }
    drawWorld();
});