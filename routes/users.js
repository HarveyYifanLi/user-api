var express = require('express');
var router = express.Router();
var helpers = require("../helpers/users");

router.route('/')
 .get(helpers.getUsers);
 
router.route('/:userId')
 .get(helpers.getUser);
  
module.exports = router;