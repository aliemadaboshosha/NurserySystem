const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors')
const morgan = require('morgan');
const teacherRouter = require('./Route/teacherRoute');
const childRouter = require('./Route/childRouter');
const classRouter = require('./Route/classRouter');

const port = process.env.port || 8080

const server = express();
mongoose.connect("mongodb://127.0.0.1:27017/Nursery")
.then(()=>{
    console.log("connected to database");


    server.listen(port,()=>{
        console.log("server listening" , port);
    })
    
})
.catch((error)=>{
    console.log("error",error.message);
}
)


//------------------ morgan


server.use(morgan("combined"));



//---------------settings 

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));




//---------------

server.use(teacherRouter);
server.use(childRouter);
server.use(classRouter);




//---------error handling -------------
server.use((request,response,next)=>{
    response.status(404).json({message:"Not Found"});
    next();
});

server.use((error,request,response,next)=>{
    response.status(500).json({message:error.message+""});
})

