function addScore() {
    if (maze[pacman.y][pacman.x] == 2) {//Coin
        pacman.score += 10;
        maze[pacman.y][pacman.y] == 4;
    }
    else if (maze[pacman.y][pacman.x] == 6) {//Cherries
        pacman.score += 50;
        maze[pacman.y][pacman.y] == 4;
    }
}

function showScore() {
    $("#score").text("Score : " + pacman.score);
}