const asyncHandler = require('express-async-handler');
const Comment = require('../models/comment');
const Post = require('../models/post');

//GET '/'
exports.getAllComments = asyncHandler(async (req, res, next) => {
    const allComments = await Comment.find().sort({ createdAt: -1 });
    res.json(allComments);
})

//create comment
exports.createComment = asyncHandler(async (req, res, next) => {
    const post = req.params.postID;
    const user = req.user.userId;
    const content = req.body.content;
    console.log(`This is the post id: ${post} and userID: ${user}`);

    const newComment = new Comment(
        {
            content,
            user,
            post,
        }
    );

    try {
        const saveComment = await newComment.save();
        await Post.findByIdAndUpdate(post, {
            $push: { comments: saveComment._id }
        });
        res.status(201).json(saveComment);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})