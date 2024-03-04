const asyncHandler = require('express-async-handler');
const Comment = require('../models/comment');

//GET '/'
exports.getAllComments = asyncHandler(async(req, res, next) => {
    const allComments = await Comment.find().sort({createdAt: -1});
    res.json(allComments);
})

//create comment
exports.createComment = asyncHandler(async(req, res, next) => {
    const postID = req.params.postID;
    const userID = req.user.userId;
    console.log(`This is the post id: ${postID} and userID: ${userID}`);
    res.json({
        "postId": postID, 
        "userId": userID
    });
})