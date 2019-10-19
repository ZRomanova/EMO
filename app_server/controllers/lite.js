/* Получить страницу друзей. */
module.exports.getFriends = function(req, res, next) {
  res.render('friends', { 
  title: 'Ваши друзья!', 
  friends: [{
    avatar: 'k.jpg',
    name: 'Ваня',
    page: '/library'
  },{
    avatar: 'k.jpg',
    name: 'Саша',
    page: '/library'
  },{
    avatar: 'k.jpg',
    name: 'Люба', 
    page: '/library'
  },{
    avatar: 'k.jpg',
    name: 'Саша',
    page: '/library'
  },{
    avatar: 'k.jpg',
    name: 'Люба', 
    page: '/library'
  }]    
  });
};

/* Получить страницу библиотек. */
module.exports.getLibrary = function(req, res, next) {
  res.render('chooseLibrary', { title: 'Библиотеки', 
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg'
  });
};

/* Получить библиотеку вопросов. */
module.exports.getQuestions = function(req, res, next) {
  res.render('questions', { 
  title: 'Библиотека вопросов!',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: 'k.jpg'
  },{
    img: 'k.jpg'  
  },{
    img: 'k.jpg' 
  },{
    img: 'k.jpg' 
  },{
    img: 'k.jpg'
  }]    
  });
};

/* Получить библиотеку ответов. */
module.exports.getAnsers = function(req, res, next) {
  res.render('answers', { 
  title: 'Библиотека ответов!',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: 'k.jpg'
  },{
    img: 'k.jpg'  
  },{
    img: 'k.jpg' 
  },{
    img: 'k.jpg' 
  },{
    img: 'k.jpg'
  }]    
  });
};

/* Получить библиотеку стикеров. */
module.exports.getStickers = function(req, res, next) {
  res.render('stickers', { 
  title: 'Библиотека стикеров!',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: 'k.jpg'
  },{
    img: 'k.jpg'  
  },{
    img: 'k.jpg' 
  },{
    img: 'k.jpg' 
  },{
    img: 'k.jpg'
  }]    
  });
};

/* Получить библиотеку загруженного. */
module.exports.getDownloads = function(req, res, next) {
  res.render('downloads', { 
  title: 'Загруженное!',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: 'k.jpg'
  },{
    img: 'k.jpg'  
  },{
    img: 'k.jpg' 
  },{
    img: 'k.jpg'
  }]    
  });
};

/* Получить страницу поиска. */
module.exports.getSeach = function(req, res, next) {
  res.render('seach', { title: 'Поиск!' });
};

/* Получить страницу настроек. */
module.exports.getSettings = function(req, res, next) {
  res.render('settings', { title: 'Настройки!' });
};
