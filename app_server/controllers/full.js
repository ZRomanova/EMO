/* GET home page. */
module.exports.getHomePage = function(req, res, next) {
  res.render('start', { title: 'Регистрация!' });
};

/* Получить страницу полной версии. */
module.exports.getFullVersion = function(req, res, next) {
  res.render('fullChat', { title: 'Полная версия!' });
};

/* Получить страницу о нас */
module.exports.getAbout = function(req, res, next) {
  res.render('about', { title: 'О нас' });
};
