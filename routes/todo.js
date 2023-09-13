const express=require("express");
const router=express.router();

// Import controller

const {createTodo}=require("../controllers/createTodo");

// define api routes
router.post("/createTodo",createTodo);

module.exports=router;
