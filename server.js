const express = require('express');
let app = express();
app.use(express.static(__dirname + '/public'));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send({
        name: 'Matt',
        likes: [
            'Biking',
            'Music Production'
        ]
    })
});
// respond with a random err message
app.get('/bad', (req, res) => {
    res.send({
        errCode: 404,
        errMessage: 'NOT FOUND'
    })
});

app.listen(3000, ()=>{
    console.log('server is up on port 3000');
});