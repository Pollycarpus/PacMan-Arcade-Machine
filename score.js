function addScore() {
    if (maze[pacman.y][pacman.x] == 2) {//Coin
        pacman.score += 10;
        nCoin--;
    }
    else if (maze[pacman.y][pacman.x] == 6) {//Cherries
        pacman.score += 50;
        nCherries--;
    }
}

function showScore() {
    $("#board").html("<p id=\"score\">Score : " + pacman.score + "</p>");
}