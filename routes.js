var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  //res.send('hello world!');
  res.sendFile('./views/index.html', {root: __dirname });
});


module.exports = router;
