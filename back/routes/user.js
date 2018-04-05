const express            = require('express');
const router             = express.Router();
const controller         = require('../controllers/user.controller');

function checkIfSignedIn(req, res, next){
  if(req.isAuthenticated()) return next()
  res.status(401).json({ message: 'Unauthorized' });
}

router.get('/private', controller.fetchUser);
router.get('/edit', controller.patchUser);
router.get('/delete', controller.deleteUser);

module.exports = router;
