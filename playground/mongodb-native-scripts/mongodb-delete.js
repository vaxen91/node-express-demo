// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Error connecting to MongoDb server')
    }
    console.log('Connected to MongoDb server ...');

    const db = client.db('TodoApp');

    // deleteMany
/*    db.collection('Todos').deleteMany({text: 'Insert one'}).then((result) =>{
        console.log(result);
    });*/
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Insert one'}).then((result) =>{
    //     console.log(result);
    // });

    // findOneAndDelete
      db.collection('Todos').findOneAndDelete({completed: false}).then((doc) =>{
        console.log(doc);
    });


    client.close();
});