/* Получить страницу друзей. */
module.exports.getFriends = function(req, res, next) {
  res.render('friends', { title: 'Ваши друзья!' });
};

/* Получить страницу библиотек. */
module.exports.getLibrary = function(req, res, next) {
  res.render('chooseLibrary', { title: 'Библиотеки' });
};

/* Получить библиотеку вопросов. */
module.exports.getQuestions = function(req, res, next) {
  res.render('questions', { title: 'Библиотека вопросов!' });
};

/* Получить библиотеку ответов. */
module.exports.getAnsers = function(req, res, next) {
  res.render('answers', { title: 'Библиотека ответов!' });
};

/* Получить библиотеку стикеров. */
module.exports.getStickers = function(req, res, next) {
  res.render('stickers', { title: 'Библиотека стикеров!' });
};

/* Получить библиотеку загруженного. */
module.exports.getDownloads = function(req, res, next) {
  res.render('downloads', { title: 'Загруженное!' });
};

/* Получить страницу поиска. */
module.exports.getSeach = function(req, res, next) {
  res.render('seach', { title: 'Поиск!' });
};

/* Получить страницу настроек. */
module.exports.getSettings = function(req, res, next) {
  res.render('settings', { title: 'Настройки!' });
};
