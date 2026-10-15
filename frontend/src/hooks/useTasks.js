import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../utils/taskApi.js";
export const useTasks=()=>{
    const queryClient=useQueryClient()

const tasksQuery=useQuery({
    queryKey:["tasks"],
    queryFn:getTasks
})
const createMutation=useMutation({
    mutationFn:createTask,
    onSuccess:()=>{
queryClient.invalidateQueries({queryKey:["tasks"]})
    }
})
 const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  })

 
  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  })

  return {
    tasksQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}