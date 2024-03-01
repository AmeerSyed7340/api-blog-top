const User = require('../models/user');
const Comment = require('../models/comment');
const asyncHandler = require('express-async-handler');

//GET '/users/
exports.getAllUsers = asyncHandler(async(req, res, next) => {
    const users = await User.find();
    res.json(users);
})

//POST '/users/'
exports.createUser = asyncHandler(async(req, res, next) => {
    const user = new User(req.body);
    const newUser = await user.save();

    //chain the responses
    res.status(201).json(newUser);
});

//POST '/:id/comment'
exports.createComment = asyncHandler(async(req, res, next) => {
    const comment = new Comment(req.body);
    const newComment = await comment.save();

    //chain the responses
    res.status(201).json(newComment);
})

