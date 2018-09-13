const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}).then(() => {
        console.log("Connected to mongodb....")
    },
    (err) => {
        console.log(err)
    });

module.exports = {
    mongoose: mongoose
}