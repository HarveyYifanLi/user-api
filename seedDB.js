var mongoose = require('mongoose');
var User = require('./models/user');

var seedsData = [{name: 'Michael', age: 49, city: "Scranton"}, 
{name: 'Dwight', age: 45, city: "Scranton"}, 
{name: 'Jim', age: 42, city: "Scranton"}, 
{name: 'Jan', age: 46, city: "New York"}, 
{name: 'Ryan', age: 40, city: "Hawaii"}];

function seedDB(){
    User.remove({}, function(err){
        if(err) console.log(err);

        seedsData.forEach((seed) => {
            User.create(seed, (error, user) => {
                if(error) console.log(error);
                else console.log('New ' + user + ' created in DB!');
            }); 
        });
    });
}

module.exports = seedDB;