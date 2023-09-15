// Import the model
const Todo=require('../models/Todo')

// define route handler to get all the todos
exports.getTodos=async (req,res)=>{
    try{
        // fetch all todo items from database
         const todos=await Todo.find({});
         
        //  response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Entire Todo Data is Fetched."
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Server Error",
            message: err.message
        })
    }
}

// define route handler to get a single todo by id using params

exports.getTodoById=async (req,res)=>{
    try{
        // fetch the specific todo from db based on id
         const todo=await Todo.findById({_id:req.params.id});
         
        //  response

        // data for given id not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "No Data Found with Given ID"    
            })
        }

        // data for given id FOUND
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${req.params.id} data successfully fetched`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Server Error",
            message: err.message
        })
    }
}