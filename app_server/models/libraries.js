var mongoose = require( 'mongoose' );
var questionsSchema = new mongoose.Schema({
    imgUrl: {type: String, required: true}
});

var answersSchema = new mongoose.Schema({
    imgUrl: {type: String, required: true}
});

var stickersSchema = new mongoose.Schema({
    imgUrl: {type: String, required: true}
});

var downloadsSchema = new mongoose.Schema({
    imgUrl: {type: String, required: true}
});

mongoose.model('Questions', questionsSchema, 'Libraries');
mongoose.model('Answers', answersSchema, 'Libraries');
mongoose.model('Stickers', stickersSchema, 'Libraries');
mongoose.model('Downloads', downloadsSchema, 'Libraries');