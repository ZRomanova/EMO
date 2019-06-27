/* GET home page. */
module.exports.getHomePage = function(req, res, next) {
  res.render('index', { title: 'Регистрация!' });
});

/* Получить страницу полной версии. */
module.exports.getFullVersion = function(req, res, next) {
  res.render('index', { title: 'Тут полная версия!' });
});
