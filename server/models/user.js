const mongoose = require('mongoose');

let User = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

module.exports = {
    User: User
};