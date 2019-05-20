var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

var scoreboard = JSON.parse(fs.readFileSync("assets/scoreboard.json"));

function pushScore(score) {
    scoreboard.push(score);
    scoreboard.sort(function(a, b){return b.score - a.score});
}

app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.json());
app.use('/js', express.static(__dirname + '/js'));
app.set('json spaces', 4);
app.get('/', function(request, response) {
    response.sendFile('index.html', {root: path.join(__dirname)})
});

app.post('/scoreboard', function(request, response) {
    var score = request.body;
    pushScore(score);
    var json = JSON.stringify(scoreboard, null, 4)
    
    fs.writeFileSync('assets/scoreboard.json', json);
    response.send(json);
});

app.get("/scoreboard", function(request, response) {
    response.json(scoreboard);
    // response.setHeader("Content-Type", "application/json");
    // response.send(JSON.stringify(scoreboard, null, 4));
});

app.listen(8080, function() {
    console.log("http://localhost:8080");
})