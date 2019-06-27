/* Полулить страницу друзей. */
module.exports.getFriends = function(req, res, next) {
  res.render('index', { title: 'Регистрация!' });
});

/* Получить страницу библиотек. */
module.exports.getLibrary = function(req, res, next) {
  res.render('index', { title: 'Тут будут библиотеки' });
});

/* Получить библиотеку вопросов. */
module.exports.getQuestions = function(req, res, next) {
  res.render('index', { title: 'Библиотека вопросов!' });
});

/* Получить библиотеку ответов. */
module.exports.getAnsers = function(req, res, next) {
  res.render('index', { title: 'Библиотека ответов!' });
});

/* Получить библиотеку стикеров. */
module.exports.getStickers = function(req, res, next) {
  res.render('index', { title: 'Библиотека стикеров!' });
});

/* Получить библиотеку загруженного. */
module.exports.getDownloads = function(req, res, next) {
  res.render('index', { title: 'Загруженное!' });
});

/* Получить страницу поиска. */
module.exports.getSeach = function(req, res, next) {
  res.render('index', { title: 'Поиск!' });
});

/* Получить страницу настроек. */
module.exports.getSettings = function(req, res, next) {
  res.render('index', { title: 'Настройки!' });
});
