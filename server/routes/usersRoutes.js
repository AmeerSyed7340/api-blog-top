const express = require('express')
const router = express.Router();
const usersController = require('../controllers/usersController');

//Route to get all users
router.get('/', usersController.getAllUsers);

//Router to create a new use
router.post('/', usersController.createUser);

module.exports = router;