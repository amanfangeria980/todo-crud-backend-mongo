const mongoose=require('mongoose');

// To use the .env file here, we have to install dotenv and write the following line

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("DB Connection Successful"))
    .catch((err)=>{
        console.log("Issue in DB Connection");
        console.error(err.message);
        process.exit(1);
    })
}

module.exports=dbConnect;