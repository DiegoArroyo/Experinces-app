const express     = require('express');
const router      = express.Router();
const controller  = require('../controllers/experience.controller');
const multer      = require('multer');
const upload      = multer({ dest: './public/uploads/' });

checkEnterprise = (req, res, next) =>{
  if(req.user.role === 'ENTERPRISE'){
    next()
  }else{
    res.status(405).json( {message: 'Sorry, you do not have access'} )
  }
};

router.get('/all', controller.getItems);
router.post('/new', upload.single('file'), controller.postItem);
router.get('/detail/:id', controller.fetchItem);
router.patch('/edit/:id', controller.patchItem);
router.delete('/delete/:id', controller.deleteItem);
router.post('/addPhoto/:id', upload.any(), controller.addPhoto);
router.post('/addFavorite/:id', controller.addFavorite);
router.post('/booking/:id', controller.addBooking);

module.exports = router
