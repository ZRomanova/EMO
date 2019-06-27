/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Регистрация!' });
});

/* Получить страницу полной версии. */
router.get('/full', function(req, res, next) {
  res.render('index', { title: 'Тут полная версия!' });
});
