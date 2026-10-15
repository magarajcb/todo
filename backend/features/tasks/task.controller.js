// const { get } = require("mongoose")
import * as taskService from "./task.service.js";
const createTask=async(req,res)=>{
    try{
        const task=await taskService.createTsk(req.body)
        res.status(201).json({
            message:"task created",
            data:task
        })
    }
    catch(error){
        res.status(400).json({
            message:error.message,
        })

}}
const getTask=async (req,res)=>{
    try{
        const task=await taskService.getTsk()
        res.status(201).json({
            message:"Task fetched",
            data:task
        })
    }
    catch(error)
    {
         res.status(500).json({
            message:error.message
         })
    }
}
const getTaskById=async (req,res)=>{
    try{
        const task=await taskService.getTskById(req.params.id)
        res.status(200).json({
            data:task
        })
    }
    catch(error){
         res.status(400).json({

      message: error.message,
    })
}}
const updateTask=async(req,res)=>{
    try{
        const task=await taskService.updateTsk(req.params.id,req.body)
         res.status(200).json({
      message: "Task updated successfully",
      data: task,
    });   
    }catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}
const deleteTask=async (req,res)=>{
    try{
        await taskService.deleteTsk(req.params.id);

    res.status(200).json({
      message: "Task deleted successfully",
    });
    }
    catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}
export  {
  createTask,
  getTask,
  getTaskById,
  updateTask,
  deleteTask,
};