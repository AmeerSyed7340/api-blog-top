const User = require('../models/user');
const Comment = require('../models/comment');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

//GET '/users/
exports.getAllUsers = asyncHandler(async(req, res, next) => {
    const users = await User.find();
    const userNames = users.map(user =>{
        return user.username; //only to send it back an json objects
    });
    res.json({userNames});
})
/* 

{
    usernames: [
	{
		"username": "Admin1"
	},
	{
		"username": "Admin2"
	},
	{
		"username": "asyed"
	},
	{
		"username": "asyed3243"
	},
	{
		"username": "asyed3243"
	}
]
}
*/
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
            res.status(201).json({
                username
                }
            );
        }
        catch(err){
            return next(err);
        }
    })
});

//POST '/users/login'
exports.loginUser = asyncHandler(async(req, res, next) => {
    //extract creds
    const {email, password} = req.body;

    //find user
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({message: "Login failed"});
    }

    //verify password
    const isMatch = await bcryptjs.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({message: 'Login failed'});
    }

    //Generate JWT
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})

    //return jwt
    res.json({token});
})

//POST '/:id/comment'
exports.createComment = asyncHandler(async(req, res, next) => {
    const comment = new Comment(req.body);
    const newComment = await comment.save();

    //chain the responses
    res.status(201).json(newComment);
})

