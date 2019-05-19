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

function addScoreBoard(namePlayer) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "http://localhost:8080/scoreboard", true); // true for asynchronous
    xmlHttp.setRequestHeader("Content-Type","application/json");
    xmlHttp.send(JSON.stringify({name: namePlayer, score : pacman.score}));
}

function showScoreBoard() {
    $("#board").html("<p id=\"score\">Score : " + pacman.score + "</p>");
    $("#board").append("<p>SCOREBOARD</p>");

    fetch("http://localhost:8080/scoreboard")
    .then((response) => response.json())
    .then((json) => 
        json.forEach(function(element, index) {
            $("#board").append("<p class=\"scoreboard\">"+element.name + " : " + element.score + "</p>");
        })
    );
}