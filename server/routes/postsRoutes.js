const express = require('express'); //import for router
const router = express.Router();//get the router
const postsController = require('../controllers/postsController');

//Route to get all posts
router.get('/', postsController.getAllPosts);

//Route to create a new post
router.post('/', postsController.createPost);


module.exports = router;