//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/student',(err,db)=>{
    if(err)
    {
        return console.log("Unable to connect to the database");
    }
    console.log('connect to Mongodb server');

    db.collection('stud').insertOne({
        fname:"Kiran",
        lname:"Virani"
    },(err,result)=>{
        if(err)
        {
            return console.log("Unable to insert record in info",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection("user").insertOne({
        name:"Kiran",
        age:21,
        location:"Bhavnagar",
        _id:1
    },(err,result)=>
  {
      if(err)
      {
        return console.log("Unable to insert recorn in table",err);
      }
      console.log(result.ops);
  });
    db.close();
});
