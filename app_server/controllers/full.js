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
    avatar: 'a.png',
    name: 'Иван',
    surname: 'Иванов',
    institution: 'ЦССВ',
    email: 'xxx@email.com',
    login: 'login',
    password: '12345'
  },{
    avatar: 'a.png',
    name: 'Иван',
    surname: 'Иванов',
    institution: 'ЦССВ',
    email: 'xxx@email.com',
    login: 'login',
    password: '12345'
  },{
    avatar: 'a.png',
    name: 'Иван',
    surname: 'Иванов',
    institution: 'ЦССВ',
    email: 'xxx@email.com',
    login: 'login',
    password: '12345'
  }],
    questions: [{
    link: '01'
    },{  
    link: '02'
    },{    
    link: '03'
    },{    
    link: '04'
  }],
    answers: [{
    link: '08'
    },{  
    link: '09'
    },{    
    link: '010'
    },{    
    link: '011'
  }],
    stickers: [{
    link: '001'
    },{  
    link: '004'
    },{    
    link: '007'
  }],
    downloads: [
  ]          
  });
};