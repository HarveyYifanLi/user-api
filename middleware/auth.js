
//Authentication: make sure user is logged in i.e. the client-side has a valid auth token
exports.loginRequired = function(req, res, next){
    try{
        //The header's data is supposed to contain a toke for the field of "Authorization"       
        const token = req.headers.authorization;
        if(token === 'some_secret_token'){
            return next();
        }else {
            return next({
                status: 401, //failed authentication
                message: "Please log in first!"
            });
        }
    }catch(e){
        return next({status: 401, message: "Please log in first"});
    }
};
