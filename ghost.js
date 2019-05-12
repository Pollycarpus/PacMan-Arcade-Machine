function Ghost(_x,_y) {
    this.x = _x*scl;
    this.y = _y*scl;
    this.xspeed = 0;
    this.yspeed = -1;

    this.update = function(pac){
      let next = bfs([this.x,this.y],pac);
      this.x = next[0];
      this.y = next[1];
    }
}

function getChild(g, arrived){
  let res = [];
  b = g[1]/scl;
  k = g[0]/scl;
  if (k - 1 >= 0){
    if (maps[b][k - 1] != 1 && !(arrived[b][k - 1])){
      res.push([(k - 1)*scl, b*scl]);
    }
  }
  if (k + 1 <= 19){
    if (maps[b][k + 1] != 1 && !(arrived[b][k + 1])){
      res.push([(k + 1)*scl, b*scl]);
    }
  }
  if (b - 1 >= 0){
    if (maps[b - 1][k] != 1 && !(arrived[b - 1][k])){
      res.push([k*scl, (b - 1)*scl]);
    }
  }
  if (b + 1 <= 14){
    if (maps[b + 1][k] != 1 && !(arrived[b + 1][k])){
      res.push([k*scl, (b + 1)*scl]);
    }
  }
  return res;
}

function bfs(g, p){
  q = [];
  q.push([g]);
  var arrived = [
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false], 
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
  ];
  while (q.length != 0){
    let path = q.shift();
    let node = path[path.length-1];
    arrived[node[1]/scl][node[0]/scl] = true;
    
    if (node[0] == p[0] && node[1] == p[1]){
      return path[1];
    }
    
    let child = getChild(node,arrived);
    for (var i=0; i<child.length; i++){
      let temp = path.slice(0);
      temp.push(child[i]);
      q.push(temp);
    }
  }
  return [30,30];
}