/* Полулить страницу друзей. */
module.exports.getFriends = function(req, res, next) {
  res.render('index', { title: 'Регистрация!' });
});

/* Получить страницу библиотек. */
module.exports.getLibrary = function(req, res, next) {
  res.render('index', { title: 'Регистрация!' });
});
