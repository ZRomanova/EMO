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
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: '/stylesheets/pictograms/1.png'
  },{
    img: '/stylesheets/pictograms/2.png'  
  }],    
  libraries: [{
      href: '/questions',
      img: '/stylesheets/symbols/question.png',
      name: 'вопросы'
  },{
      href: '/answers',
      img: '/stylesheets/symbols/answer.png',
      name: 'ответы'
  },{
      href: '/stickers',
      img: '/stylesheets/symbols/sticker.png',
      name: 'стикеры'
  },{
      href: '/downloads',
      img: '/stylesheets/symbols/downloads.png',
      name: 'фотографии'
  }]
  });
};

/* Получить библиотеку вопросов. */
module.exports.getQuestions = function(req, res, next) {
  res.render('questions', { 
  title: 'Библиотека вопросов!',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: '/stylesheets/pictograms/questions/1.png'
  },{
    img: '/stylesheets/pictograms/questions/2.png'  
  },{
    img: '/stylesheets/pictograms/questions/3.png' 
  },{
    img: '/stylesheets/pictograms/questions/4.png' 
  },{
    img: '/stylesheets/pictograms/questions/5.png'  
  },{
    img: '/stylesheets/pictograms/questions/6.png' 
  },{
    img: '/stylesheets/pictograms/questions/7.png' 
  },{
    img: '/stylesheets/pictograms/questions/8.png'  
  },{
    img: '/stylesheets/pictograms/questions/9.png' 
  },{
    img: '/stylesheets/pictograms/questions/10.png' 
  },{
    img: '/stylesheets/pictograms/questions/11.png'  
  },{
    img: '/stylesheets/pictograms/questions/12.png' 
  }]    
  });
};

/* Получить библиотеку ответов. */
module.exports.getAnswers = function(req, res, next) {
  res.render('answers', { 
  title: 'Библиотека ответов!',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: '/stylesheets/pictograms/answers/1.png'
  },{
    img: '/stylesheets/pictograms/answers/2.png'  
  }],
  libraries: [{
      href: '/locations',
      img: '/stylesheets/symbols/answer.png',
      name: 'места'
  },{
      href: '/mood',
      img: '/stylesheets/symbols/answer.png',
      name: 'настроение'
  },{
      href: '/doing',
      img: '/stylesheets/symbols/answer.png',
      name: 'дела'
  },{
      href: '/lessons',
      img: '/stylesheets/symbols/answer.png',
      name: 'занятия'
  },{
      href: '/weather',
      img: '/stylesheets/symbols/answer.png',
      name: 'погода'
  }]  
  });
};

module.exports.getLocations = function(req, res, next) {
  res.render('locations', { 
  title: 'Библиотека',
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

module.exports.getMood = function(req, res, next) {
  res.render('mood', { 
  title: 'Библиотека',
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

module.exports.getDoing = function(req, res, next) {
  res.render('doing', { 
  title: 'Библиотека',
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

module.exports.getLessons = function(req, res, next) {
  res.render('lessons', { 
  title: 'Библиотека',
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

module.exports.getWeather = function(req, res, next) {
  res.render('weather', { 
  title: 'Библиотека',
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
