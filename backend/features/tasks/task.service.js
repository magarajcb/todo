
import * as taskRepo from "./task.repository.js";
const createTsk=async (data)=>{
    return taskRepo.createTask({
        title:data.title.trim(),
        description:data.description || "",
        dueDate:data.dueDate,
        priority:data.priority || "Low"
    })
}
const getTsk=async ()=>{
    return taskRepo.getTask()
}
const getTskById=async (id)=>{
    const task=await taskRepo.findTask(id)
    return task
}
const updateTsk= async (id,update)=>{
  const task=  await taskRepo.updateTask(id,update)
  return task
}
const deleteTsk=async (id)=>{
   const task= await taskRepo.deleteTask(id)
   return task
}
export{
    createTsk,getTsk,updateTsk,deleteTsk,getTskById
}