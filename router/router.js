
let express = require('express');
const session = require('express-session');
const userController= require("../controller/user.js");
var router = express.Router();
const {
    validateUser,
  } = require('../middlewares/userValidator');
  router.post("/signup",validateUser,userController.signUp);
  router.get('/', function (req, res) {
    res.render('user', {
        success: req.session.success,
        errors: req.session.errors,
        successMsg:req.session.successMsg
    });
    req.session.errors = null;
    });
module.exports = router;