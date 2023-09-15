// Import the model
const Todo=require('../models/Todo')

// define route handler
exports.deleteTodo=async (req,res)=>{
    try{
        // fetch and delete
        const {id}=req.params;
        await Todo.findByIdAndDelete(id);
         
        //  response
        res.status(200).json({
            success: true,
            message: "Todo Deleted"
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
