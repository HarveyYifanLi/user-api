var express = require('express'),
    app = express(),
    port = 8080,
    bodyParser = require('body-parser');

var errorHandler = require("./handlers/error");
var { loginRequired } = require("./middleware/auth");    
var userRoutes = require("./routes/users");
var seedDB = require('./seedDB'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Uncomment the below line to automatically populate the Database with example data defined in seedDB.js for the first time.
//seedDB();

app.get('/', function(req, res, next){
    let requirementStr = "As per requirements, please go to route /users to view the list of users and go to /users/:userId to list a specific user's information";
    res.send(requirementStr);
});

app.use('/users', userRoutes);
/* Finished Optional Task: To enable authentication (using a customized middleware 'loginRequired') 
for all related users route, please uncomment the below line and also comment out the above original unprotected users route */
//app.use('/users', loginRequired, userRoutes);

app.use(function(req, res, next) {
    let err = new Error("The content you are looking for is not found");
    err.status = 404;
    next(err); 
});
//Register the customized generic error-handler middleware for all the routes.
app.use(errorHandler);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
});

module.exports = app;