// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDb server')
    }
    console.log('Connected to MongoDb server ...');

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Insert one',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo document', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});