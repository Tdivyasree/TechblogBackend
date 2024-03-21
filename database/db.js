import mongoose from "mongoose";

const Connection=async(username,password)=>{
     const URL=`mongodb://${username}:${password}@ac-heon9b1-shard-00-00.eagmw0u.mongodb.net:27017,ac-heon9b1-shard-00-01.eagmw0u.mongodb.net:27017,ac-heon9b1-shard-00-02.eagmw0u.mongodb.net:27017/?ssl=true&replicaSet=atlas-2f1n1h-shard-0&authSource=admin&retryWrites=true&w=majority`;
     try{
          await mongoose.connect(URL);//{ useUnifiedTopology: true, useNewUrlParser: true }
          console.log('Database connected');
     }
     catch(error){
          console.log('Error while connecting with the database',error);
     }
}

export default Connection;