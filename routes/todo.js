const express=require("express");
const router=express.Router();

// Import controller

const {createTodo}=require("../controllers/createTodo");
const {getTodos}=require("../controllers/getTodos");

// define api routes
router.post("/createTodo",createTodo);

router.get("/getTodos",getTodos);

module.exports=router;
