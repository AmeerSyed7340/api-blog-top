const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
    //should have more fields to connect with user and post
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;