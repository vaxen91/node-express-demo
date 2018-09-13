const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/user');
const {Todo} = require('./models/todo');

let app = express();
app.use(bodyParser.json);

app.post('/todos', (req, res) => {
    console.log('ddddd');
    console.log(req.body);
});

app.get('/', (req, res) => {
    res.send({
        name: 'Matt',
        likes: [
            'Biking',
            'Music Production'
        ]
    })
});

app.listen(3000, () => {
    console.log('server is up on port 3000');
});







// let newTodo = new Todo({text: 'Cucinare la cena'});
//
// newTodo.save().then((response) => {
//         console.log('Saved todo ' + response);
//     },
//     (error) => {
//         console.log(error)
//     });
//
// let otherTodo = new Todo({text: 'Programmare'});
//
// otherTodo.save().then((response) => {
//         console.log('Saved todo ' + response);
//     },
//     (error) => {
//         console.log(error)
//     });
//
// let newUser = new User({username: 'Matt',email:'demo@demo', password: 'ddd'});
//
// newUser.save().then((response) => {
//         console.log('Saved user ' + response);
//     },
//     (error) => {
//         console.log(error)
//     });
//
// app.use(express.static(__dirname + '/public'));
// // respond with "hello world" when a GET request is made to the homepage

// // respond with a random err message
// app.get('/bad', (req, res) => {
//     res.send({
//         errCode: 404,
//         errMessage: 'NOT FOUND'
//     })
// });
//

