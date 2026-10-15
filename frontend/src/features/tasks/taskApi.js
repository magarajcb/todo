import axios from "axios"
const api=axios.create({
    baseURL:import.meta.env.VITE_API_URL    
})
export const getTasks=async ()=>{
    const response=await api.get("/tasks")
    return response.data.data   
}
export const createTask=async (taskData)=>{
    const response=await api.post("/tasks",taskData)
      return response.data.data;
}
export const updateTask = async ({ id, ...taskData }) => {
  const response = await api.put(`/tasks/${id}`, taskData);
  return response.data.data;
};

export const deleteTask = async (id) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
}