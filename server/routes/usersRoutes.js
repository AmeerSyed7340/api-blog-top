const express = require('express')
const router = express.Router();
const usersController = require('../controllers/usersController');

//Route to get all users
router.get('/', usersController.getAllUsers);

//Route to create a new use
router.post('/', usersController.createUser);

//Route to create a new comment
router.post('/:id/comment', usersController.createComment);



module.exports = router;