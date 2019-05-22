var maps,p;
var arrGhost = new Array();
var automateWalk;
var position;

class Point {
	//Class Point save position of Ghost and Player in Game Board
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	move(dx,dy){
		this.x += dx;
		this.y += dy;
	}
	canPass(dx,dy,maps){
		let newX = this.x + dx;
		let newY = this.y + dy;
		if(newX >= 0 && newY >= 0 && newX < 20 && newY < 25)
			return maps[newX][newY] != '0';
		return false;
	}
}

class Ghost {
	//Class Ghost used for make Ghost Object
	constructor(x,y){
		this.pos = new Point(x,y);
	}
	move(dx,dy){
		//Move Ghost as long as dx and dy
		this.pos.move(dx,dy);
	}
}

class Player {
	//Class Player used for make Player Object
	constructor(x,y){
		this.pos = new Point(x,y);
		this.score = 0;
		this.direction = 1;
		this.remainedCoin = 202;
	}
	move(dx,dy,maps){
		//Move Player as long as dx and dy and update recent maps
		this.pos.move(dx,dy);
		if(maps[this.pos.x][this.pos.y] == '2'){
			this.score += 10;
			this.remainedCoin -= 1;
			if(this.remainedCoin == 0 && position == "game") gameOverWin();
			maps[this.pos.x][this.pos.y] = '1';
		} else if(maps[this.pos.x][this.pos.y] == '3'){
			this.score += 50;
			this.remainedCoin -= 1;
			if(this.remainedCoin == 0 && position == "game") gameOverWin();
			maps[this.pos.x][this.pos.y] = '1';
		}
		return maps;
	}

}

function printMaps(maps,arrGhost,p){
	//Function to print maps to game board in browser
	$("#game-board").empty();
	var windowratio = $(window).height() / $(window).width();
	var topPercentage = 3;
	var leftPercentage = topPercentage * windowratio;
	var left = (100 - leftPercentage*25)/2;
	var element = '<p id="score" style="color: white; left: '+ String(left) + '%; top: ' + String(15) + '%;">Score = ' + String(p.score) + '</p>';
	$("#game-board").append(element);
	for(let i = 0;i<20;i++){
		for(let j = 0;j<25;j++){
			var contained = false;
			if(p.pos.x == i && p.pos.y == j){
				element = '<img src="./assets/pacman' + String(p.direction) + '.gif" class="block-element" style="top: ' + String(20+i*topPercentage) + '%; left: ' + String(left+j*leftPercentage) + '%; height: ' + String(topPercentage) + '%; width: '+ String(leftPercentage) + '%;">'
				$("#game-board").append(element);
				contained = true;
			} else {
				for(let k = 0;k<arrGhost.length;k++){
					if(arrGhost[k].pos.x == i && arrGhost[k].pos.y == j){
						element = '<img src="./assets/ghost.gif" class="block-element" style="top: ' + String(20+i*topPercentage) + '%; left: ' + String(left+j*leftPercentage) + '%; height: ' + String(topPercentage) + '%; width: '+ String(leftPercentage) + '%;">'
						$("#game-board").append(element);
						contained = true;
					}
				}
			}
			if(contained == false){
				if(maps[i][j] == '2'){
					element = '<img src="./assets/coin.gif" class="block-element" style="top: ' + String(20+i*topPercentage) + '%; left: ' + String(left+j*leftPercentage) + '%; height: ' + String(topPercentage) + '%; width: '+ String(leftPercentage) + '%;">';
					$("#game-board").append(element);
				} else if(maps[i][j] == '3'){
					element = '<img src="./assets/cherries.png" class="block-element" style="top: ' + String(20+i*topPercentage) + '%; left: ' + String(left+j*leftPercentage) + '%; height: ' + String(topPercentage) + '%; width: '+ String(leftPercentage) + '%;">';
					$("#game-board").append(element);					
				} else if(maps[i][j] == '1'){
					element = '<img src="./assets/black.gif" class="block-element" style="top: ' + String(20+i*topPercentage) + '%; left: ' + String(left+j*leftPercentage) + '%; height: ' + String(topPercentage) + '%; width: '+ String(leftPercentage) + '%;">';
					$("#game-board").append(element);
				} else {
					element = '<img src="./assets/blue.png" class="block-element" style="top: ' + String(20+i*topPercentage) + '%; left: ' + String(left+j*leftPercentage) + '%; height: ' + String(topPercentage) + '%; width: '+ String(leftPercentage) + '%;">';
					$("#game-board").append(element);
				}
			}
		}
	}
}

function randomFruit(maps){
	//Function to Random Fruit inside gameboard
	for(let i = 0;i<20;i++){
		for(let j = 0;j<25;j++){
			if(maps[i][j] == "2"){
				var isFruit = Math.floor(Math.random() * 5) + 1;
				if(isFruit == 3){
					maps[i][j] = '3';
				}  
			}
		}
	}
	return maps;
}

function init(){
	//Function to initialize game
	maps = [["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
		["0","2","2","2","2","2","2","2","0","2","2","2","2","2","2","2","0","2","2","2","2","2","2","2","0"],
		["0","2","0","0","0","0","0","2","2","2","0","0","2","0","0","2","2","2","0","0","0","0","0","2","0"],
		["0","2","2","2","2","2","2","2","0","2","2","2","2","2","2","2","0","2","2","2","2","2","2","2","0"],
		["0","2","0","0","0","0","0","0","0","0","0","0","2","0","0","0","0","0","0","0","0","0","0","2","0"],
		["0","2","0","0","0","0","0","0","0","0","0","0","2","0","0","0","0","0","0","0","0","0","0","2","0"],
		["0","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","0"],
		["0","0","2","0","2","0","0","0","2","0","0","0","0","0","0","0","0","2","0","0","0","0","0","0","0"],
		["0","0","2","0","2","0","0","0","2","2","2","2","2","2","0","0","0","2","0","0","0","0","0","0","0"],
		["0","0","2","2","2","0","0","0","2","0","0","0","2","2","2","2","2","2","0","0","0","0","0","0","0"],
		["0","0","2","0","2","0","0","0","2","0","0","0","0","0","0","0","0","2","0","0","0","0","0","0","0"],
		["0","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","0"],
		["0","2","0","0","0","2","0","0","0","2","0","0","0","2","0","0","0","0","0","2","0","0","0","2","0"],
		["0","2","0","0","0","2","0","0","0","2","2","2","2","2","0","0","0","0","0","2","0","0","0","2","0"],
		["0","2","2","2","2","2","2","2","0","2","0","2","0","2","0","2","2","2","2","2","2","2","2","2","0"],
		["0","2","0","0","0","0","0","2","0","2","0","2","0","2","0","2","0","0","0","0","0","0","0","2","0"],
		["0","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","0"],
		["0","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
		["0","2","2","2","2","2","2","2","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
		["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]];
	var cnt = 0;
	for(let i = 0;i<20;i++){
		for(var j = 0;j<25;j++){
			if(maps[i][j] != '0') cnt++;
		}
	}
	maps = randomFruit(maps);
	var n = [];
	for(var i=0;i<4;i++){
		n.push(Math.floor(Math.random() * 202) + 1);
	}
	arrGhost = [];
	for(let i = 0;i<4;i++){
		var g;
		var idx = 0;
		for(let j = 0;j<20;j++){
			for(let k = 0;k<25;k++){
				if(maps[j][k] != '0') idx++;
				if(idx == n[i]) g = new Ghost(j,k);
			}
		}
		arrGhost.push(g);
	}
	p = new Player(8,12);
}

function makeStruct(names) {
  var names = names.split(' ');
  var count = names.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[names[i]] = arguments[i];
    }
  }
  return constructor;
}

function isGameOver(arrGhost,p){
	//Function o determine whether player lost or not
	if(position != "game") return false;
	for(let i = 0;i<arrGhost.length;i++){
		if(arrGhost[i].pos.x == p.pos.x && arrGhost[i].pos.y == p.pos.y)
			return true;
	}
	return false;
}

function gameOver(){
	//Function run when player lost the game
	position = "game-over";
	setTimeout(function(){
	    $("#game-board").empty();
	    renderGameOver();
	}, 1000);
	clearInterval(automateWalk);
}

function gameOverWin(){
	//Function run when player wins the game
	position = "game-over";
	setTimeout(function(){
	    $("#game-board").empty();
	    renderGameOverWin();
	}, 1000);
	clearInterval(automateWalk);
}


function addScore(){
	//Function to add score to json file
      $.ajax({
      type: 'POST',
      url: "http://localhost:8080/addscore",
      processData: true,
      data: {name: $("input:text")[0].value,
  			score: p.score},
      dataType: "json",
      success: function (data) { 
      	
      }});
      renderScoreBoard();
}

function compare( a, b ) {
  return b.score - a.score;
}

function getGhostWalk(ghost,p){
	//Function to make a ghost walk
	var queue = [];
	var isGoal = false;
	var arrWalk = [[1,0],[-1,0],[0,1],[0,-1]];
	var pointNow = new Point(ghost.pos.x,ghost.pos.y);
	var visited = Array.from(Array(20), () => new Array(25));
	var pointGoal = new Point(p.pos.x,p.pos.y);
	for(let i = 0;i<20;i++){
		for(let j = 0;j<25;j++){
			visited[i][j] = false;
		}
	}
	for(let i = 0;i<4;i++){
		if(pointNow.canPass(arrWalk[i][0],arrWalk[i][1],maps)){
			var Item = makeStruct("Id Point");
			newPoint = new Point(pointNow.x+arrWalk[i][0],pointNow.y+arrWalk[i][1]);
			var ss = new Item(i, newPoint);
			queue.push(ss);
			visited[ss.Point.x][ss.Point.y] = true;
		}
	}
	while(isGoal == false){
		var ss = queue.shift();
		var pointNow = new Point(ss.Point.x,ss.Point.y);
		var id = ss.Id;
		if(pointNow.x == pointGoal.x && pointNow.y == pointGoal.y){
			idWalk = id;
			isGoal = true;
		} else {
			for(let i = 0;i<4;i++){
				for(let j = 0;j<4;j++){
					if(pointNow.canPass(arrWalk[j][0],arrWalk[j][1],maps) && visited[pointNow.x+arrWalk[j][0]][pointNow.y+arrWalk[j][1]] == false){
						var Item = makeStruct("Id Point");
						var newPoint = new Point(pointNow.x+arrWalk[j][0],pointNow.y+arrWalk[j][1]);
						var ssa = new Item(id, newPoint);
						visited[newPoint.x][newPoint.y] = true;
						queue.push(ssa);
					}
				}
			}
		}
	}
	return idWalk;
}

function ghostWalk(){
	//Function to make all ghost walk
	var arrWalk = [[1,0],[-1,0],[0,1],[0,-1]];
	for(let i = 0;i < arrGhost.length;i++){
		idWalk = getGhostWalk(arrGhost[i],p);
		var isCanWalk = true;
		for(let j = 0;j<i;j++){
			if((arrGhost[i].pos.x + arrWalk[idWalk][0]) == arrGhost[j].pos.x && (arrGhost[i].pos.y + arrWalk[idWalk][1]) == arrGhost[j].pos.y) isCanWalk = false;
		}
		if(isCanWalk) arrGhost[i].move(arrWalk[idWalk][0],arrWalk[idWalk][1]);
		if(isGameOver(arrGhost,p)){
			gameOver();
		}
	}
	printMaps(maps,arrGhost,p);
}

function playerWalk(){
	//Function to make player walk
	var arrWalk = [[0,1],[0,-1],[1,0],[-1,0]];
	if(p.pos.canPass(arrWalk[p.direction-1][0],arrWalk[p.direction-1][1],maps)){
		maps = p.move(arrWalk[p.direction-1][0],arrWalk[p.direction-1][1],maps);
		printMaps(maps,arrGhost,p);
	}
}

function elementWalk(){
	//Function to make all element walk
	playerWalk();
	isWalk = Math.floor(Math.random() * 3) + 1;
	if(isWalk != 1) ghostWalk();
}

function checkKey(e) {
	//Function to recognize player command
    e = e || window.event;
    if(position == 'game'){
	    if (e.keyCode == '38') {
	        // up arrow
	        if(p.pos.canPass(-1,0,maps)){
	        	p.direction = 4;
	        }
	       	if(isGameOver(arrGhost,p)){
				gameOver();
			}
	    }else if (e.keyCode == '40') {
	        // down arrow
	        if(p.pos.canPass(1,0,maps)){
	        	p.direction = 3;
	        }
	       	if(isGameOver(arrGhost,p)){
				gameOver();
			}
	    } else if (e.keyCode == '37') {
	       // left arrow
	        if(p.pos.canPass(0,-1,maps)){
	        	p.direction = 2;
	        }
	       	if(isGameOver(arrGhost,p)){
				gameOver();
			}
	    } else if (e.keyCode == '39') {
	       // right arrow
	        if(p.pos.canPass(0,1,maps)){
	        	p.direction = 1;
	        }
	       	if(isGameOver(arrGhost,p)){
				gameOver();
			}
	    }
	} else if(position == 'home-page'){
		if(e.keyCode == '40' || e.keyCode == '38'){
			if(option == 1){
				option = 2;
				$("#option-1").removeClass("checked");
				$("#option-1").toggleClass("unchecked");
				$("#option-2").removeClass("unchecked");
				$("#option-2").toggleClass("checked");
			} else {
				option = 1;
				$("#option-2").removeClass("checked");
				$("#option-2").toggleClass("unchecked");
				$("#option-1").removeClass("unchecked");
				$("#option-1").toggleClass("checked");
			}
		} else if(e.keyCode == '13'){
			if(option == 1){
				renderGameBoard();
			} else {
				renderScoreBoard();
			}
		}
	}
}

function renderGameBoard(){
	//Render Game Board 
	position = "game";
	$("#option").empty();
	init();
	printMaps(maps,arrGhost,p);
	automateWalk =setInterval(elementWalk,300);
}

function renderGameOver(){
	//Render Game Over when player lost the games
	$("#game-board").empty();
	var element;
	element = '<img class="image-game-over" src="./assets/game-over.png">';
	$("#game-over").append(element);
	element = '<p id="final-score"> Congrats ! Your Final Score : ' + String(p.score) + '</p>';
	$("#game-over").append(element); 
	element = '<form><div class="form-group"><input type="text" class="form-control" id="name" placeholder="Input Name"></div><button type="submit" class="btn btn-primary" onclick="addScore()">Submit</button></form>';
	$("#game-over").append(element)
	$("#game-over").toggleClass("gameover")
}

function renderGameOverWin(){
	//Render Game Over when player wins the game
	$("#game-board").empty();
	var element;
	element = '<img class="image-game-over" src="./assets/winner.jpg">';
	$("#game-over").append(element);
	element = '<p id="final-score"> Congrats ! Your Final Score : ' + String(p.score) + '</p>';
	$("#game-over").append(element); 
	element = '<form><div class="form-group"><input type="text" class="form-control" id="name" placeholder="Input Name"></div><button type="submit" class="btn btn-primary" onclick="addScore()">Submit</button></form>';
	$("#game-over").append(element)
	$("#game-over").toggleClass("gameover")
}

function renderHomePage(){
	//Render Home Page
	var element = '<h1 id="option-1" class="checked"> Start New Game </h1><h1 id="option-2" class="unchecked"> HighScore </h1>';
	$("#high-score").empty();
	$("#option").append(element);
	position = "home-page";
	option = 1;
}

function renderScoreBoard(){
	//Render Score Board
	$("#game-over").removeClass("gameover");
	$("#game-over").empty();
	$("#option").empty();
	position = 'high-score';
    element = '<img src="./assets/high-score.png">';
    $('#high-score').append(element);
	var element = '<table id="table-score" class="table"><thead><tr><th>No</th><th>Name</th><th>Score</th></tr></thead></table>';
    $("#high-score").append(element);  
      $.ajax({
      type: 'GET',
      url: "http://localhost:8080/getscore",
      processData: true,
      data: {},
      dataType: "json",
      success: function (data) { 
      	data.sort(compare);
      	for(let i = 0;i<Math.min(5,data.length);i++){
      		$("#table-score").append("<tbody></tbody>");
      		$("tbody").append('<tr id="score-' + String(i+1) + '"></tr>');
      		var element;
      		element = '<th scope="row">' + String(i+1) + '</th>';
      		$("#score-"+String(i+1)).append(element);
			element = '<td>' + data[i]["nama"] + '</td>';
			$("#score-"+String(i+1)).append(element);
			element = '<td>' + data[i]["score"] + '</td>';
			$("#score-"+String(i+1)).append(element);
      	}
      }
        
      });
      element = '<button type="button" class="homepage btn btn-light" onclick="renderHomePage()">Back To HomePage</button>';
      $("#high-score").append(element);

}

$(document).ready(function(){
	document.onkeydown = checkKey;
	renderHomePage();
});
