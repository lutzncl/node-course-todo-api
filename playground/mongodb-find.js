//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// New databases can be created by simply selecting the name. However,
// this will only appear in Robomongo once data has been added.
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    // instead of else we can use return
    return console.log('Unable to connect to Mongo DB server.');
  }
  console.log('Connected to Mongo DB server');

  // toArray returns a promise
  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find({
    _id: new ObjectID('595671f58e940a1decd8b334')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find({completed: false}).count().then((count) => {
    console.log(`Todos count:  ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name: 'Lutz'}).count().then((count) => {
    console.log(`Users count:  ${count}`);
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });
  //db.close();
});
