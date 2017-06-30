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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5956864c911f8586ff632102")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('59567c6ccecdfb2cf0acd182')
    }, {
      $set: {
        name: 'Lutzi'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOrginal: false
    }).then((result) => {
      console.log(result);
    });

  //db.close();
});
