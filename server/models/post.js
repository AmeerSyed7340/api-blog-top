const mongoose = require('mongoose'); //always import in files concerning db

//create schema 
const postSchema = new mongoose.Schema(
    //Schema takes an object of objects (object 1)
    {
        //object 1 sub 1
        title: {
            type: String,
            required: [true, 'Post title is required'],
            trim: true,
        },
        //object 1 sub 2
        content: {
            type: String,
            required: [true, 'Post content is required'],
        },
        //add user and comments (both should have their own models)
        // author:{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: true,
        // },
        comments:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }]
    },
    //Options object (object 2)
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;