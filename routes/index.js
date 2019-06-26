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
router.get('/friends/library', ctrlLite)
router.get('/friends/library/questions', ctrlLite)
router.get('/friends/library/ansers', ctrlLite)
router.get('/friends/library/stickers', ctrlLite)
router.get('/friends/library/downloads', ctrlLite)
router.get('/friends/seach', ctrlLite)
router.get('/friends/settings', ctrlLite)

module.exports = router;
