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

  // delete Many- this returns a results object: result: { n: 3, ok: 1 }
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
  //   console.log(result);
  // });

  // delete one - this returns a results object: result: { n: 1, ok: 1 }
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=> {
  //   console.log(result);
  // });

  // find one and delete - this returns the result document
  db.collection('Todos').findOneAndDelete({completed: true}).then((result)=> {
    console.log(result);
  });

  //db.close();
});
