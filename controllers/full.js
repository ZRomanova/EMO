/* GET home page. */
module.exports.getHomePage = function(req, res, next) {
  res.render('index', { title: 'Регистрация!' });
});

/* Получить страницу полной версии. */
module.exports.getFullVersion = function(req, res, next) {
  res.render('index', { title: 'Тут полная версия!' });
});

/* Получить страницу о нас */
module.exports.getAbout = function(req, res, next) {
  res.render('index', { title: 'О нас' });
});
