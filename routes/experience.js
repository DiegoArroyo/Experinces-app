const express     = require('express');
const router      = express.Router();
const controller  = require('../controllers/experience.controller');

router.get('/', controller.getItems)
.post('/', controller.postItem)
.get('/:id', controller.fetchItem)
.patch('/:id', controller.patchItem)
.delete('/:id', controller.deleteItem);

module.exports = router
