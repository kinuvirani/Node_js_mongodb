const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/student',(err,db)=>{
  if(err)
  {
      return console.log('Unable to connect to Mongodb server');
  }
  console.log("Connect to database successfully...!!!");
  /*db.collection('user').find().toArray().then((docs)=>{
      console.log('user');
      console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log("Unable to fetch the record",err);
  });*/

  db.collection('user').find().count().then((count)=>{
      console.log(`Count= ${count}`);
  },(err)=>{
      console.log("Unable to fetch the record",err);
  });
  db.collection('user').find({name:"Kiran"}).toArray().then((docs)=>{
      console.log('user');
      console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log("Unable to fetch the record",err);
  });
});
