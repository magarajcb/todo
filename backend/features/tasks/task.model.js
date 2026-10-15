import mongoose from "mongoose"
const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        maxlength:[100,"Title cannot exceed this limit"],
        required:[true,"Task title is required"]
    },
    description:{
        type:String,
        default:"",
        maxlength:[1000,"Words cannot excedd this limit"],
        trim:true
    },
    dueDate:{
        type:Date,
        required:[true,"Due date is important in Todo list"]
    },
    priority:{
        type:String,
        enum:["Low","Medium","High"],
        default:"Medium"
    },
    status:{
        type:String,
        enum:["Completed","Not completed"],
        default:"Not completed"
    },
    
},
{
        timestamps:true,
    })
    const Task = mongoose.model("Task", taskSchema);
    export default Task