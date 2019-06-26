var express = require('express');
var router = express.Router();
var ctrlLite = require('../controllers/lite');
var ctrlFull = require('../controllers/full');   

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello, Zoya!' });
});

/* Сраницы полной версии. */
router.get('/full', ctrlFull)

/* Страницы лайт-версии. */
router.get('/friends', ctrlLite)
router.get('/friends/libary', ctrlLite)
router.get('/friends/libary/questions', ctrlLite)
router.get('/friends/libary/ansers', ctrlLite)
router.get('/friends/libary/stickers', ctrlLite)
router.get('/friends/libary/downloads', ctrlLite)
router.get('/friends/seach', ctrlLite)
router.get('/friends/settings', ctrlLite)

module.exports = router;
