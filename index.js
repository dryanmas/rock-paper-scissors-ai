var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.use(express.static('public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.sendFile(__dirname+'/public/index.html')
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});