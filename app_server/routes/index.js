var express = require('express');
var router = express.Router();

var ctrlLite = require('../controllers/lite');
var ctrlFull = require('../controllers/full'); 

/* GET home page. */
router.get('/', ctrlFull.getHomePage) 

/* Сраница о нас. */
router.get('/about', ctrlFull.getAbout)

/* Сраницы полной версии. */
router.get('/full', ctrlFull.getFullVersion)
router.get('/full_1', ctrlFull.getFullVersion1)
router.get('/admin', ctrlFull.getAdminPage)


/* Страницы лайт-версии. */
router.get('/friends', ctrlLite.getFriends)
router.get('/library', ctrlLite.getLibrary)
router.get('/questions', ctrlLite.getQuestions)
router.get('/answers', ctrlLite.getAnswers)
router.get('/stickers', ctrlLite.getStickers)
router.get('/downloads', ctrlLite.getDownloads)
router.get('/seach', ctrlLite.getSeach)
router.get('/locations', ctrlLite.getLocations)
router.get('/mood', ctrlLite.getMood)
router.get('/doing', ctrlLite.getDoing)
router.get('/lessons', ctrlLite.getLessons)
router.get('/weather', ctrlLite.getWeather)
router.get('/settings', ctrlLite.getSettings)

module.exports = router;
