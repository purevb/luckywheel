const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const Wheel = require ("./routes/wheel");
app.use("/api",Wheel);

const connectToDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/luckywheeldatabase',{
            
        });
        console.log("connected to mongodb");
    } catch (error){
        console.log(error);
        process.exit(1);
    }
}
connectToDB();

const port = 3106;
app.listen(port, ()=>{
console.log("Server started")
}
);
