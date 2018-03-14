const express     = require('express');
const router      = express.Router();
const controller  = require('../controllers/experience.controller');

router.get('/', controller.getExperience)
.post('/', controller.postExperience)
.patch('/:id', controller.patchExperience)
.delete('/:id', controller.deleteExperince);

module.exports = router
