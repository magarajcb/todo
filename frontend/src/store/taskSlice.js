import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  },
  editingTaskId: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },

    editTask(state, action) {
      const task = action.payload;
      state.editingTaskId = task._id;
      state.formData = {
        title: task.title,
        description: task.description || "",
        dueDate: task.dueDate?.slice(0, 10) || "",
        priority: task.priority,
      };
    },

    resetForm(state) {
      state.formData = { ...initialState.formData };
      state.editingTaskId = null;
    },
  },
})
export const {setFormData,editTask,resetForm}=taskSlice.actions
export default taskSlice.reducer