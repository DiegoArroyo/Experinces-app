const express     = require('express');
const router      = express.Router();
const controller  = require('../controllers/booking.controller')

checkUser = (req, res, next) =>{
  if(req.user.role === 'USER'){
    next()
  }else{
    res.status(405).json( {message: 'Sorry, you do not have access'} )
  }
};

router.post('/new', controller.addBooking);
router.patch('/edit/:id', controller.patchBooking);
router.delete('/delete/:id', controller.deleteBooking);

module.exports = router