const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

//GET '/commments/'
router.get('/', commentsController.getAllComments);

module.exports = router;