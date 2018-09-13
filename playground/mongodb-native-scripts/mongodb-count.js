// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDb server')
    }
    console.log('Connected to MongoDb server ...');

    const db = client.db('TodoApp');

    db.collection('Todos').countDocuments({completed: true}).then((count) => {
            console.log('completed todos count: ' + count);
        }, (err) => {
            console.log('Unable to fetch todos' + err);
        }
    );

    client.close();
});