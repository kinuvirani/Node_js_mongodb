const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/student',(err,db)=>{
    if(err)
    {
        return console.log("Unable to connect to database");
    }
    console.log("Connected to successfully");
    db.collection('user').findOneAndUpdate({name:"Kiru"},{$set:{name:"Kiran"},$min:{age:20}},{returnOriginal:false}).then((res)=>{
        console.log(res);
    });
    db.close();
});
