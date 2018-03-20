const express            = require('express');
const router             = express.Router();
const { ensureLoggedIn } = require ('connect-ensure-login');
const controller         = require('../controllers/user.controller');

function checkIfSignedIn(req, res, next){
  if(req.isAuthenticated()) return next()
  res.status(401).json({ message: 'Unauthorized' });
}

// router.get('/private/:id', controller.fetchUser)

module.exports = router;
