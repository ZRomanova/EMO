var express = require('express');
var router = express.Router();

var ctrlLite = require('../controllers/lite');
var ctrlFull = require('../controllers/full'); 

/* GET home page. */
router.get('/', ctrlFull.getHomePage) 

/* Сраницы полной версии. */
router.get('/full', ctrlFull.getFullVersion)

/* Страницы лайт-версии. */
router.get('/friends', ctrlLite.getFriends)
router.get('/friends/library', ctrlLite.getLibrary)
router.get('/friends/library/questions', ctrlLite.getQuestions)
router.get('/friends/library/ansers', ctrlLite.getAnsers)
router.get('/friends/library/stickers', ctrlLite.getStickers)
router.get('/friends/library/downloads', ctrlLite.getDownloads)
router.get('/friends/seach', ctrlLite.getSeach)
router.get('/friends/settings', ctrlLite.getSettings)

module.exports = router;
