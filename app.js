var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(('index.html'));
});

app.get('/api/data', function(req, res) {
  res.json({})
});

app.listen(3000);

console.log('Running at Port 3000');
