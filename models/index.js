var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/user-api');

mongoose.Promise = Promise;

module.exports.User = require("./user");