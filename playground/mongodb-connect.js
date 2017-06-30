const MongoClient = require('mongodb').MongoClient;

// New databases can be created by simply selecting the name. However,
// this will only appear in Robomongo once data has been added.
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if (err) {
    // instead of else we can use return
    return console.log('Unable to connect to Mongo DB server.');
  }
  console.log('Connected to Mongo DB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Lutz',
    age: 44,
    location: 'Morpeth'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  db.close();
});
