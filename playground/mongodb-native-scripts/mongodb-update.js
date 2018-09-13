// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDb server')
    }
    console.log('Connected to MongoDb server ...');

    const db = client.db('TodoApp');
    // findOneAndDelete
      db.collection('Todos').findOneAndUpdate({completed: false}, {$set: {text:'update'}}, {returnOriginal: false}).then((doc) =>{
        console.log(doc);},
          (err) => {
              console.log('Unable to update' + err);
    });


    client.close();
});