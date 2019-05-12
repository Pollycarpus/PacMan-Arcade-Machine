var scl = 30;
var wall = [
  [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],
  [1,0],[1,14],
  [2,0],[2,2],[2,3],[2,4],[2,5],[2,7],[2,9],[2,10],[2,11],[2,12],[2,14],
  [3,0],[3,2],[3,7],[3,12],[3,14],
  [4,0],[4,4],[4,6],[4,7],[4,8],[4,10],[4,14],
  [5,0],[5,1],[5,2],[5,4],[5,10],[5,12],[5,13],[5,14],
  [6,0],[6,4],[6,5],[6,6],[6,8],[6,9],[6,10],[6,14],
  [7,0],[7,2],[7,12],[7,14],
  [8,0],[8,2],[8,4],[8,6],[8,8],[8,10],[8,12],[8,14],
  [9,0],[9,2],[9,4],[9,6],[9,8],[9,10],[9,11],[9,12],[9,14],
  [10,0],[10,2],[10,3],[10,4],[10,6],[10,8],[10,10],[10,12],[10,14],
  [11,0],[11,2],[11,4],[11,6],[11,8],[11,10],[11,12],[11,14],
  [12,0],[12,2],[12,12],[12,14],
  [13,0],[13,4],[13,5],[13,6],[13,8],[13,9],[13,10],[13,14],
  [14,0],[14,1],[14,2],[14,4],[14,10],[14,12],[14,13],[14,14],
  [15,0],[15,4],[15,6],[15,7],[15,8],[15,10],[15,14],
  [16,0],[16,2],[16,7],[16,12],[16,14],
  [17,0],[17,2],[17,3],[17,4],[17,5],[17,7],[17,9],[17,10],[17,11],[17,12],[17,14],
  [18,0],[18,14],
  [19,0],[19,1],[19,2],[19,3],[19,4],[19,5],[19,6],[19,7],[19,8],[19,9],[19,10],[19,11],[19,12],[19,13],[19,14],
];
var c;
var p;
var g;
var times = 0;
var maps = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
  [1,2,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,1], 
  [1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1], 
  [1,2,1,2,2,2,2,2,2,2,1,2,2,2,2,2,2,1,2,1], 
  [1,2,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2,1,2,1], 
  [1,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1,2,1], 
  [1,2,2,2,1,2,1,2,1,1,1,1,2,1,2,1,2,2,2,1], 
  [1,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,1], 
  [1,2,2,2,1,2,1,2,1,1,1,1,2,1,2,1,2,2,2,1], 
  [1,2,1,2,2,2,1,2,2,2,2,2,2,1,2,2,2,1,2,1], 
  [1,2,1,2,1,1,1,2,1,1,1,1,2,1,1,1,2,1,2,1], 
  [1,2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,2,1,2,1], 
  [1,2,1,1,2,1,2,1,1,1,1,1,1,2,1,2,1,1,2,1], 
  [1,3,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var hs;
var ch;
var makanan = 146;

function init(){
  for (var i=0; i<maps.length; i++){
    for (var j=0; j<maps[i].length; j++){
      if (maps[i][j] == 0){
        maps[i][j] = 2;
      }
    }
  }
  pac = new Pacman();
  tempx = floor(random(10));
  tempy = floor(random(10));
  while (maps[tempy][tempx] == 1){
      tempx = floor(random(10));
      tempy = floor(random(10));
  }
  ghost1 = new Ghost(tempx, tempy);
  
  tempx = floor(random(10));
  tempy = floor(random(10));
  while (maps[tempy][tempx] == 1 && tempx != ghost1.x && tempy != ghost1.y){
      tempx = floor(random(10));
      tempy = floor(random(10));
  }
  ghost2 = new Ghost(tempx, tempy);
  
  tempx = floor(random(10));
  tempy = floor(random(10));
  while (maps[tempy][tempx] == 1 && tempx != ghost1.x && tempx != ghost1.y && tempx != ghost2.x && tempy != ghost2.y){
      tempx = floor(random(10));
      tempy = floor(random(10));
  }
  ghost3 = new Ghost(tempx, tempy);
  
  tempx = floor(random(10));
  tempy = floor(random(10));
  while (maps[tempy][tempx] == 1 && tempx != ghost1.x && tempy != ghost1.y && tempx != ghost2.x && tempy != ghost2.y && tempx != ghost3.x && tempy != ghost3.y){
      tempx = floor(random(10));
      tempy = floor(random(10));
  }
  ghost4 = new Ghost(tempx, tempy); 
}

function setup() {
  createCanvas(600, 480);
  state = 0; 
  frameRate(5);
  c = loadImage("assets/coin.gif");
  p = loadImage("assets/pacman.gif");
  g = loadImage("assets/ghost.gif");
  ch = loadImage("assets/cherries.png");
  
  input = createInput();
  input.position(120, 180);

  button = createButton('start');
  button.position(input.x + input.width, 180);
  button.mousePressed(function(){
    state = 1;
  });

  button2 = createButton('start again');
  button2.position(250, 300);
  button2.mousePressed(function(){
    state = 0;
  });

  button3 = createButton('high score');
  button3.position(0, 470);
  button3.mousePressed(function(){
    state = 3;
  });

  button4 = createButton('back');
  button4.position(560, 470);
  button4.mousePressed(function(){
    state = 2;
  });
}

function draw() {
  background(23);
  if (makanan == 0){
    state = 4;
  }
  if (state == 0){
    fill(220, 220, 220);
    text("Your Name :", 200, 150);
    textSize(32);
    input.show();
    button.show();
    button2.hide();
    button3.hide();
    button4.hide();
    times = 0;
    init();
    pac.name = input.value();
    ajax = 0;
  } else if (state == 1){
    input.hide();
    button.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    for (let i=0; i<maps.length; i++){
      for (let j=0; j<maps[0].length; j++){
        if (maps[i][j] == 2){
          image(c, j*scl+10, i*scl+10, scl/2, scl/2);
        } else if (maps[i][j] == 1){
          fill(0,0,170);
          rect(j*scl, i*scl, scl, scl);
        } else if (maps[i][j] == 3){
          image(ch, j*scl+10, i*scl+10, scl/2, scl/2);
        }
      }
    }
    image(p, pac.x, pac.y, scl, scl);
    image(g, ghost1.x, ghost1.y, scl, scl);
    image(g, ghost2.x, ghost2.y, scl, scl);
    image(g, ghost3.x, ghost3.y, scl, scl);
    image(g, ghost4.x, ghost4.y, scl, scl);
    
    if (times >= 3){
      frameRate(5);
      pac.update();
      ghost1.update([pac.x,pac.y]);
      ghost2.update([pac.x,pac.y]);
      ghost3.update([pac.x,pac.y]);
      ghost4.update([pac.x,pac.y]);
      if (pac.death()){
        state = 2;
      };
      let stat = input.value() + ' ' + pac.score;
      fill(220, 220, 220);
      textSize(32);
      text(stat, 300, 470);
    } else{
      frameRate(2);
      background(30, 30, 30, 75);
      fill(220, 220, 220);
      textSize(72);
      text(3-times, 300, 225);
      textAlign(CENTER);
    }
    times = times+1;
    
  } else if (state == 2){
    fill(220, 220, 220);
    text("Game Over", 300, 225);
    textAlign(CENTER);
    textSize(32);
    button.hide();
    button2.show();
    button3.show();
    button4.hide();

  } else if (state == 3){
    button.hide();
    button2.hide();
    button3.hide();
    button4.show();
    input.hide();
    frameRate(1);
    let sorted = [];
    $.get("ajax/score.json", function(data) {
      hs = data;
      for (var i=0; i<hs.length; i++){
        sorted.push([hs[i].name,hs[i].score]);
      }
      for (var i=0; i<sorted.length-1; i++){
        for (var j=i; j<sorted.length; j++){
          if (sorted[i][1] < sorted[j][1]){
            let temp = sorted[i].slice(0);
            sorted[i] = sorted[j].slice(0);
            sorted[j] = temp.slice(0);
          }
        }
      }
      for (var i=0; i<10; i++){
        textSize(24);
        fill(255);
        rect(60,60+(40*i),440,40);
        fill(30, 30, 30);
        text((i+1)+' '+sorted[i][0]+' '+sorted[i][1], 140, 90+(i*40));
      }
    }, "json");
  } else if (state == 4){
    fill(220, 220, 220);
    text("You Win", 300, 225);
    textAlign(CENTER);
    textSize(32);
    button.hide();
    button2.show();
    button3.show();
    button4.hide();
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    pac.dir(0, -1);
  } else if (keyCode === DOWN_ARROW){
    pac.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW){
    pac.dir(1, 0);
  } else if (keyCode === LEFT_ARROW){
    pac.dir(-1, 0);
  }
}