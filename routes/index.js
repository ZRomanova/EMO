var express = require('express');
var router = express.Router();
var ctrlLite = require('../controllers/lite');
var ctrlFull = require('../controllers/full');   

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello, Zoya!' });
});

module.exports = router;
