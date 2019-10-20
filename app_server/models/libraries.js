var mongoose = require( 'mongoose' );

var questionsSchema = new mongoose.Schema({
    img: {type: Buffer, required: true}
});

var answersSchema = new mongoose.Schema({
    img: {type: Buffer, required: true}
});

var stickersSchema = new mongoose.Schema({
    img: {type: Buffer, required: true}
});

var downloadsSchema = new mongoose.Schema({
    img: {type: Buffer, required: true}
});

var librariesSchema = new mongoose.Schema({
    questions: [questionsSchema],
    answers: [answersSchema],
    stickers: [stickersSchema],
    downloads: [downloadsSchema]
});

mongoose.model('Library', librariesSchema, 'Libraries');
