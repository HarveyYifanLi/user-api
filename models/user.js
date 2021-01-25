var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    age: {
        type: Number,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;