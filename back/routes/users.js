const express        = require('express');
const router         = express.Router();
const passport       = require("passport");
const LocalStrategy  = require('passport-local').Strategy;
const controller     = require('../controllers/auth.controller') ;

function checkIfSignedIn(req,res, next){
  if(req.isAuthenticated()) return next()
  res.status(401).json({ message: 'Unauthorized' });
}

router.post('/signup', controller.signUp) 
.post('/signin', passport.authenticate('local'), controller.signIn)
.post('/signout', controller.signOut)
.get('/signedin', controller.signedIn)
.get('/private', checkIfSignedIn, controller.private)

module.exports = router;
