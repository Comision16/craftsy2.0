var express = require('express');
var router = express.Router();

const {login,register,profile, processRegister, processLogin} = require('../controllers/usersController')
const {registerValidator, loginValidator} = require('../validations');

/* /users */
router
  .get('/register', register)
  .post('/register',registerValidator, processRegister)
  .get('/login', login )
  .post('/login',loginValidator,processLogin)
  .get('/profile',profile)

module.exports = router;
