const Post = require('../models/post');
const asyncHandler = require('express-async-handler');

//GET '/posts'
exports.getAllPosts = asyncHandler(async(req, res, next) => {
    const posts = await Post.find();
    res.json(posts);
})

//POST '/posts'
exports.createPost = asyncHandler(async(req, res, next) => {
    const post = new Post(req.body);
    const newPost = await post.save();
    //chain the responses
    res.status(201).json(newPost);
});