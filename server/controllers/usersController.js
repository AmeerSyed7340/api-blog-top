const User = require('../models/user');
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