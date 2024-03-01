const asyncHandler = require('express-async-handler');
const Comment = require('../models/comment');

//GET '/'
exports.getAllComments = asyncHandler(async(req, res, next) => {
    const allComments = await Comment.find().sort({createdAt: -1});
    res.json(allComments);
})