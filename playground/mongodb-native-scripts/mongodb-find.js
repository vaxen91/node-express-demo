// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDb server')
    }
    console.log('Connected to MongoDb server ...');

    const db = client.db('TodoApp');

    db.collection('Todos').find({_id: new ObjectID('5b99645e1a12c8205b165915')}).toArray().then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos' + err);
        }
    );

    client.close();
});