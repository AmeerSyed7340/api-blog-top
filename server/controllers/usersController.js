const User = require('../models/user');
const Comment = require('../models/comment');
const bcryptjs = require('bcryptjs');
const asyncHandler = require('express-async-handler');

//GET '/users/
exports.getAllUsers = asyncHandler(async(req, res, next) => {
    const users = await User.find();
    res.json(users);
})

//POST '/users/'s
exports.createUser = asyncHandler(async(req, res, next) => {
    const {username, password} = req.body;

    //create hashed password
    bcryptjs.hash(password, 10, async(err, hashedPassword) => {
        try{
            const user = new User({
                username,
                password: hashedPassword
            })
            //save the new user
            await user.save();

            //return the new user
            res.status(201).json(user);
        }
        catch(err){
            return next(err);
        }
    })
});

//POST '/:id/comment'
exports.createComment = asyncHandler(async(req, res, next) => {
    const comment = new Comment(req.body);
    const newComment = await comment.save();

    //chain the responses
    res.status(201).json(newComment);
})

