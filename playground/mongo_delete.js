const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/student',(err,db)=>{
  if(err)
  {
      return console.log("Unable to connect to database",err);
  }
  console.log("connect to database");

  /*db.collection('user').deleteMany({name:"Neha"}).then((res)=>{
      console.log(res);
  });
  db.collection('user').deleteOne({name:"Jyoti"}).then((res)=>{
      console.log(res);
  });*/
  db.collection('user').findOneAndDelete({name:"Jyoti"}).then((res)=>{
      console.log(res);
  });
  db.close();
});
