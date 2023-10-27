const exp=require('express')
const app=exp();
const cors=require('cors');
require('dotenv').config();
const mclient=require('mongodb').MongoClient;
const dburl=process.env.DATABASE_URL
app.use(cors());
mclient.connect(dburl)
.then((client)=>{
    //let database=client.db('userlist');
    //let usercollection=database.collection('user');
    console.log("Database connected successfully");
    //client.send({message:"Database connection success"});
})
.catch((error)=>{
    console.log("Error occured:",error);
})
app.get('/',(request,response)=>{
    response.send({message:"Connection success"});
})

app.listen(process.env.PORT,()=>{
    console.log("Server listening to port:",process.env.PORT)
})