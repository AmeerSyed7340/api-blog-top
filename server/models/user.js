const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username not provided'],
        trim: true
    },
    password:{
        type: String,
        required: [true, 'Password not provided']
    }
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;