//hello

var express = require('express');
var birds = require('./birds');

var app = express();

app.set('port', 8080);

app.use('/', express.static('./../client'));
app.use('/birds', birds);
app.use('/*', function(req, res){
  res.send('poop');
})

app.listen(app.get('port'), function(){
  console.log('listening on port ' + app.get('port'))
})
