const express=require('express');
const app=express();

// load config from env file

require("dotenv").config();
const PORT=process.env.PORT || 4000;

// Middleware to parse json request body

app.use(express.json());

// Import routes for TODO API

const todoRoutes=require("./routes/todo");

// Mount the todo API routes

app.use("/api/v1",todoRoutes);

// start server

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

// Connect to the database
const dbConnect=require('./config/database');
dbConnect();

app.get("/",(req,res)=>{
    res.send("<h1>This is HOMEPAGE </h1>")
})