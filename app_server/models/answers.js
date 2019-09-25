var mongoose = require( 'mongoose' );
var answerSchema = new mongoose.Schema({
    imgUrl: {type: String, required: true}
});

mongoose.model('Answer', answerSchema, 'Answers');