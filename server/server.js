

var express = require('express');
var request = require('request');
//var mashKey = require('./apiKey');
var mashKey = process.env.mashKey;
var url = require('url');
//var birds = require('./birds');

var app = express();

var portSet = process.env.PORT || 8080;

app.set('port', portSet);

app.use('/', function(req, res, next){
  console.log('Received a ' + req.method + ' request on URL ' + req.path);
  next();
}, express.static('./../client'));

// app.use('/getCollection', function(req, res, next){
//   request.get('https://omgvamp-hearthstone-v1.p.mashape.com/cards', {
//     headers: {
//       'x-mashape-key': mashKey
//     }
//   }, function(error, resp, body){
//           if(!error && resp.statusCode === 200){
//             console.log(body);
//             res.send("all good");
//           } else {
//             console.log(error);
//             console.log(resp.statusCode);
//             res.send('there was an error');
//           }
//     })
// })

app.use('/searchCollection', function(req, res, next){
  console.log('request for search fired');
  var query = url.parse(req.url).pathname.slice(1);
  var apiUrl = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/' + query
  request.get(apiUrl + "?collectible=1", {
    headers: {
      'x-mashape-key': mashKey
    }
  }, function(error, resp, body){
      if(!error && resp.statusCode === 200){
        res.send(body);
      } else {
        console.log(error);
        console.log(resp.statusCode);
        res.send('there was an error');
      }
  })
})

//app.use('/birds', birds);
app.use('/*', function(req, res){
  res.send('requested url path does not exist');
})

app.listen(app.get('port'), function(){
  console.log('listening on port ' + app.get('port'))
})
