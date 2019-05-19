/** MAZE LEGEND :
*   1 => wall
*   2 => coins
*   3 => ground
*   4 => pacman
*   5 => ghost 
*   6 => cherries
**/
var maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,6,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,2,1],
    [1,2,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,1,1,2,2,1,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2,1,2,1],
    [1,2,2,2,2,2,1,2,1,1,1,1,2,1,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,2,2,2,2,2,2,1,2,1,1,1,2,1],
    [1,2,2,2,1,6,2,2,1,1,1,1,2,2,6,1,2,2,2,1],
    [1,1,1,2,1,2,1,2,2,2,2,2,2,1,2,1,2,1,1,1],
    [2,2,2,2,2,2,1,2,1,1,1,1,2,1,2,2,2,2,2,2],
    [1,1,1,2,1,2,1,2,2,4,2,2,2,1,2,1,2,1,1,1],
    [1,2,2,2,1,2,2,2,1,1,1,1,2,2,2,1,2,2,2,1],
    [1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1],
    [1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1],
    [1,2,1,6,2,2,1,2,1,1,1,1,2,1,2,2,6,1,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

var visited = [];
for (var i = 0; i < 20; i++) {
    visited.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
}
visited[1][2] = 2;
visited[1][17] = 2;
visited[16][3] = 2;
visited[16][16] = 2;
visited[9][5] = 2;
visited[9][14] = 2;

var nCoin = 189;
var nCherries = 6;

var pacman = {
    x: 9,
    y: 12,
    score: 0,
}

var velocityX = 0;
var velocityY = 0;

var ghost1 = {
    x: 0,
    y: 0,
}

var ghost2 = {
    x: 0,
    y: 0,
}

var ghost3 = {
    x: 0,
    y: 0,
}

var ghost4 = {
    x: 0,
    y: 0,
}

function initGhost() {
    var x = Math.floor(Math.random() * 20);
    var y = Math.floor(Math.random() * 20);
    while (maze[y][x] == 1 || maze[y][x] == 4) {
        x = Math.floor(Math.random() * 20);
        y = Math.floor(Math.random() * 20);
    }
    ghost1.x = x; ghost1.y = y;
    maze[y][x] = 5;

    x = Math.floor(Math.random() * 20);
    y = Math.floor(Math.random() * 20);
    while (maze[y][x] == 1 || maze[y][x] == 4) {
        x = Math.floor(Math.random() * 20);
        y = Math.floor(Math.random() * 20);
    }
    ghost2.x = x; ghost2.y = y;
    maze[y][x] = 5;

    x = Math.floor(Math.random() * 20);
    y = Math.floor(Math.random() * 20);
    while (maze[y][x] == 1 || maze[y][x] == 4) {
        x = Math.floor(Math.random() * 20);
        y = Math.floor(Math.random() * 20);
    }
    ghost3.x = x; ghost3.y = y;
    maze[y][x] = 5;

    x = Math.floor(Math.random() * 20);
    y = Math.floor(Math.random() * 20);
    while (maze[y][x] == 1 || maze[y][x] == 4) {
        x = Math.floor(Math.random() * 20);
        y = Math.floor(Math.random() * 20);
    }
    ghost4.x = x; ghost4.y = y;
    maze[y][x] = 5;

    visited[pacman.y][pacman.x] = 1;
}

function drawWorld() {
    $(".wall").remove();
    $(".coin").remove();
    $(".ground").remove();
    $("#pacman").remove();
    $(".ghost").remove();
    $(".cherries").remove();
    $("br").remove();
    for(var i = 0; i < maze.length; i++) {
        for(var j = 0; j < maze[i].length; j++) {
            if (maze[i][j] == 1) {
                $("#world").append("<div class=\"wall\"></div>")
            }
            else if (maze[i][j] == 2) {
                $("#world").append("<div class=\"coin\"></div>")
            }
            else if (maze[i][j] == 3) {
                $("#world").append("<div class=\"ground\"></div>")
            }
            else if (maze[i][j] == 4) {
                $("#world").append("<div id=\"pacman\"></div>")
            }
            else if (maze[i][j] == 5) {
                $("#world").append("<div class=\"ghost\"></div>")
            }
            else if (maze[i][j] == 6) {
                $("#world").append("<div class=\"cherries\"></div>")
            }
        }
        $("#world").append("<br>")
    }
    displayCSS();
}

function movePacman() {
    pacman.x += velocityX;
    pacman.y += velocityY;
    visited[pacman.y][pacman.x] = 1;
    addScore();
    showScore();
    maze[pacman.y][pacman.x] = 4;
}

function moveGhost(ghost) {
    var ghostMovement = BFSAlgo(ghost,pacman);
    if (maze[ghostMovement.y][ghostMovement.x] != 5) {
        if (visited[ghost.y][ghost.x] == 1) {
            maze[ghost.y][ghost.x] = 3;
        } else if (visited[ghost.y][ghost.x] == 2) {
            maze[ghost.y][ghost.x] = 6;
        } else {
            maze[ghost.y][ghost.x] = 2;
        }
        ghost.x = ghostMovement.x; ghost.y = ghostMovement.y;
        maze[ghost.y][ghost.x] = 5;    
    }    
}

function winTheGame() {
    return (nCherries == 0) && (nCoin == 0);
}

function loseTheGame() {
    return (pacman.x==ghost1.x&&pacman.y==ghost1.y || pacman.x==ghost2.x&&pacman.y==ghost2.y || pacman.x==ghost3.x&&pacman.y==ghost3.y || pacman.x==ghost4.x&&pacman.y==ghost4.y); 
}

initGhost();
showScore();
drawWorld();
rightPacman();