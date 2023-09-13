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

/* 
Hierarchy
-Created the env file and added the env variables
-Under config-> dbConnect function and exported it
-Under models-> Created a schema and exported it
-Under Controller-> imported the schema and create the business logic for createTodo and exported it as an asynchronous function
-under routes-> imported the express, add the router, imported the route's business logic from controller and defined/mapped api routes and exported the whole file as router
-under the main file index.js -> initiated the express server, go the port, used express.json() parser, imported the routes, mounted those routes using :- app.use("/api/v1",todoRoutes); and then started the server, imported the dbConnect function from config folder and started the db server and then created a default route for the home page
-Finally, wrote the whole hierarchy
 */





