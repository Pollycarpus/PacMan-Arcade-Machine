var fs = require('fs');
var express = require('express');
var cors = require('cors');
var path = require('path'); 
var app = express();

app.use(cors()); 
app.use(express.static(path.join(__dirname, '../')));

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/addscore/", function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	contents = fs.readFileSync('score.json', 'utf8');
	var score = {
		nama: String(req.body.name),
		score: String(req.body.score)
	}
	var json = JSON.parse(contents);
	json.push(score);
    fs.writeFileSync('score.json', JSON.stringify(json), 'utf-8');
    res.send(); 
});

app.get('/getscore', function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'});
  contents = fs.readFileSync('score.json', 'utf8');
  res.end(contents);
});

app.listen(process.env.PORT || 8080);