var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var passportLocalMongoose = require('passport-local-mongoose');
const Token = require('./tokens');

var User = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Video'}]
});

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);