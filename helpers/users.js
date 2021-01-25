var db = require('../models');
const {list} = require('pb-util');//npm module used to encodes an array of JSON values into a google.protobuf.ListValue

exports.getUsers = function(req, res, next){
    db.User.find()
    .then(function(users){
        let resultArray = users.map((userMeta)=>{
            let id = JSON.stringify(userMeta._doc._id);
            let {name, age, city} = userMeta._doc;
            return {id, name, age, city};
        });
        let listValue = list.encode(resultArray);//Encodes an array of JSON values into a google.protobuf.ListValue
        res.status(200).send(listValue);
    })
    .catch(function(err){
        console.log(err);
        return next(err);
    })
}

exports.getUser = function(req, res, next){
   db.User.findById(req.params.userId)
   .then(function(foundUser){
        let id = JSON.stringify(foundUser._doc._id);
        let {name, age, city} = foundUser._doc; 
        res.status(200).json({id, name, age, city});
   })
   .catch(function(err){
       console.log(err);
       return next(err);
   })
}

module.exports = exports;