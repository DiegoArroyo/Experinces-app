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

router.get('/', controller.getItems)
.post('/new', upload.single('file'), controller.postItem)
.get('/:id', controller.fetchItem)
.patch('edit/:id', controller.patchItem)
.delete('delete/:id', controller.deleteItem)
.get('/myExperiences', controller.ownedItems);

module.exports = router
