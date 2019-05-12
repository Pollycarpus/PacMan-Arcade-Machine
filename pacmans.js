function Pacman() {
  this.x = 18*30;
  this.y = 13*30;
  this.xspeed = 0;
  this.yspeed = -1;
  this.yqueue = -1;
  this.xqueue = 0;
  this.score = 0;
  this.name = "";

  this.dir = function(x, y){
    this.xqueue = x;
    this.yqueue = y;
  }

  this.update = function() {
    if (maps[this.y/30][this.x/30] == 2){
      this.score = this.score + 10;
      maps[this.y/30][this.x/30] = 0;
      makanan = makanan - 1;
    } else if (maps[this.y/30][this.x/30] == 3){
      this.score = this.score + 50;
      maps[this.y/30][this.x/30] = 0;
      makanan = makanan - 1;
    }

    if (maps[this.y/30+this.yqueue][this.x/30+this.xqueue] != 1){
      this.yspeed = this.yqueue;
      this.xspeed = this.xqueue;
    }
    var tempx = this.x/30+this.xspeed;
    var tempy = this.y/30+this.yspeed;
    var found = false;
    for (var i=0; i<wall.length; i++){
      if (wall[i][0]==tempx && wall[i][1]==tempy){
        found = true;
      }
    }
    if (!found){
      this.x = tempx*30;
      this.y = tempy*30;
    }
  }

  this.death = function(){
    let death = false;
    if (this.x == ghost1.x && this.y == ghost1.y){
      death = true;
    } else if (this.x == ghost2.x && this.y == ghost2.y){
      death = true;
    } else if (this.x == ghost3.x && this.y == ghost3.y){
      death = true;
    } else if (this.x == ghost4.x && this.y == ghost4.y){
      death = true;
    }
    if (death){
      $.ajax({
        url  : "addScore.php",
        type : 'POST',
        data :  {"name":this.name,"score":Number(this.score)},
        success : function (data){
        }
      })
    }
    return death;
  }
}