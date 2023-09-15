const express=require("express");
const router=express.Router();

// Import controller

const {createTodo}=require("../controllers/createTodo");
const {getTodos,getTodoById}=require("../controllers/getTodos");
const {deleteTodo}=require("../controllers/deleteTodo")
// define api routes
router.post("/createTodo",createTodo);

router.get("/getTodos",getTodos);

router.get("/getTodos/:id",getTodoById)

router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;
