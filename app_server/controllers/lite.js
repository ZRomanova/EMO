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
    img: '/stylesheets/pictograms/answers/1.png',
    id: 'a'
  },{
    img: '/stylesheets/pictograms/answers/2.png'  
  }],
  libraries: [{
      href: '/locations',
      img: '/stylesheets/symbols/locations.png',
      name: 'места'
  },{
      href: '/mood',
      img: '/stylesheets/symbols/mood.png',
      name: 'настроение'
  },{
      href: '/doing',
      img: '/stylesheets/symbols/doing.png',
      name: 'дела'
  },{
      href: '/lessons',
      img: '/stylesheets/symbols/lessons.png',
      name: 'занятия'
  },{
      href: '/weather',
      img: '/stylesheets/symbols/weather.png',
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
    img: '/stylesheets/pictograms/answers/locations/1.png'
  },{
    img: '/stylesheets/pictograms/answers/locations/2.png'  
  },{
    img: '/stylesheets/pictograms/answers/locations/3.png' 
  },{
    img: '/stylesheets/pictograms/answers/locations/4.png' 
  },{
    img: '/stylesheets/pictograms/answers/locations/5.png'  
  },{
    img: '/stylesheets/pictograms/answers/locations/6.png' 
  },{
    img: '/stylesheets/pictograms/answers/locations/7.png' 
  },{
    img: '/stylesheets/pictograms/answers/locations/8.png'  
  },{
    img: '/stylesheets/pictograms/answers/locations/9.png' 
  },{
    img: '/stylesheets/pictograms/answers/locations/10.png' 
  }]    
  });
};

module.exports.getMood = function(req, res, next) {
  res.render('mood', { 
  title: 'Библиотека',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: '/stylesheets/pictograms/answers/mood/1.png'
  },{
    img: '/stylesheets/pictograms/answers/mood/2.png'  
  },{
    img: '/stylesheets/pictograms/answers/mood/3.png' 
  },{
    img: '/stylesheets/pictograms/answers/mood/4.png' 
  },{
    img: '/stylesheets/pictograms/answers/mood/5.png'  
  },{
    img: '/stylesheets/pictograms/answers/mood/6.png' 
  }]    
  });
};

module.exports.getDoing = function(req, res, next) {
  res.render('doing', { 
  title: 'Библиотека',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: '/stylesheets/pictograms/answers/doing/1.png'
  },{
    img: '/stylesheets/pictograms/answers/doing/2.png'  
  },{
    img: '/stylesheets/pictograms/answers/doing/3.png' 
  },{
    img: '/stylesheets/pictograms/answers/doing/4.png' 
  },{
    img: '/stylesheets/pictograms/answers/doing/5.png'  
  },{
    img: '/stylesheets/pictograms/answers/doing/6.png' 
  },{
    img: '/stylesheets/pictograms/answers/doing/7.png' 
  },{
    img: '/stylesheets/pictograms/answers/doing/8.png'  
  },{
    img: '/stylesheets/pictograms/answers/doing/9.png' 
  },{
    img: '/stylesheets/pictograms/answers/doing/10.png' 
  }]    
  });
};

module.exports.getLessons = function(req, res, next) {
  res.render('lessons', { 
  title: 'Библиотека',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: '/stylesheets/pictograms/answers/lessons/d1.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/d2.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/d3.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/d4.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/d5.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/d6.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/d7.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/d8.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/d9.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m1.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m2.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m3.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m4.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m5.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m6.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m7.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m8.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/m9.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/a1.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/a2.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/a3.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/a4.png',
    hid: 'false'
  },{
    img: '/stylesheets/pictograms/answers/lessons/a5.png',
    hid: 'false'
  }]    
  });
};

module.exports.getWeather = function(req, res, next) {
  res.render('weather', { 
  title: 'Библиотека',
  user_avatar: 'k.jpg',
  friend_avatar: 'k.jpg',
  pictograms: [{
    img: '/stylesheets/pictograms/answers/weather/1.png'
  },{
    img: '/stylesheets/pictograms/answers/weather/2.png'  
  },{
    img: '/stylesheets/pictograms/answers/weather/3.png' 
  },{
    img: '/stylesheets/pictograms/answers/weather/4.png' 
  },{
    img: '/stylesheets/pictograms/answers/weather/5.png'  
  },{
    img: '/stylesheets/pictograms/answers/weather/6.png' 
  },{
    img: '/stylesheets/pictograms/answers/weather/7.png' 
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
  pictograms: []    
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
