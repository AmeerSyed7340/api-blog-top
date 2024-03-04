const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

//GET 'posts/'
exports.getAllPosts = asyncHandler(async(req, res, next) => {
    const posts = await Post.find();
    res.json(posts);
})

//POST 'posts/'
exports.createPost = asyncHandler(async(req, res, next) => {
    const { title, content } = req.body;
    const author = req.user.userId; // Ensure this matches how you're setting it in verifyToken

    try {
        const newPost = await Post.create({
            title,
            content,
            author, // This now correctly references req.user.userID
        });

        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});