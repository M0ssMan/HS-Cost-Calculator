var express = require('express')
var router = express.Router();

router.use(function timeLog(req, res, next){
  console.log('Time Request Received: ' + new Date());
  next();
})

router.get('/', function(req, res){
  res.send('Birds home page');
})

router.get('/about', function(req, res){
  res.send('More about birds');
})

module.exports = router;
