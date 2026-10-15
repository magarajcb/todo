import Task from "./task.model.js"
const createTask=async (data)=>{
    return await Task.create(data)
}
const getTask=async ()=>{
    return await Task.find().sort({createdAt:-1})
}
const findTask=async (id)=>{
    return await Task.findById(id)
}
const updateTask=async (id,update)=>{
    return await Task.findByIdAndUpdate(id,update)
}
const deleteTask=async (id)=>{
    return await Task.findByIdAndDelete(id)
}
export{createTask,getTask, findTask,updateTask,deleteTask}