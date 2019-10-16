/* GET home page. */
module.exports.getHomePage = function(req, res, next) {
  res.render('start', { title: 'Регистрация!' });
};

/* Получить страницу полной версии. */
module.exports.getFullVersion = function(req, res, next) {
  res.render('fullChat', { title: 'Полная версия!' });
};

module.exports.getFullVersion1 = function(req, res, next) {
  res.render('fullChat_1', { title: 'Сообщения' });
};

/* Получить страницу о нас */
module.exports.getAbout = function(req, res, next) {
  res.render('about', { title: 'О нас' });
};

module.exports.getAdminPage = function(req, res, next) {
  res.render('admin', 
  { title: 'Admin' ,
    users: [{
    name: 'Иван',
    surname: 'Иванов',
    institution: 'ЦССВ',
    email: 'xxx@email.com',
    login: 'login',
    password: '12345'
  },{
    name: 'Иван',
    surname: 'Иванов',
    institution: 'ЦССВ',
    email: 'xxx@email.com',
    login: 'login',
    password: '12345'
  },{
    name: 'Иван',
    surname: 'Иванов',
    institution: 'ЦССВ',
    email: 'xxx@email.com',
    login: 'login',
    password: '12345'
  }],
    pictograms: [{
    librery: 'questions',
    link: '01'
    },{  
    librery: 'questions',
    link: '02'
    },{    
    librery: 'questions',
    link: '03'
    },{    
    librery: 'questions',
    link: '04'
    },{    
    librery: 'answers',
    link: '010'
    },{    
    librery: 'answers',
    link: '09'
    },{    
    librery: 'answers',
    link: '08'
  }]        
  });
};