const express        = require('express');
const router         = express.Router();
const controller     = require('../controllers/auth.controller') ;
const passport       = require('passport');

function checkIfSignedIn(req, res, next){
  if(req.isAuthenticated()) return next()
  res.status(401).json({ message: 'Unauthorized' });
}

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);
router.post('/signout', controller.signout);
router.get('/signedin', controller.signedin);

module.exports = router;
