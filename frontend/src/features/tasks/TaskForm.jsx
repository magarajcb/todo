import { useDispatch, useSelector } from "react-redux";
import { setFormData, resetForm } from "./taskSlice";
import { useTasks } from "./useTasks";

function TaskForm() {
  const dispatch = useDispatch();
  const { formData, editingTaskId } = useSelector(
    (state) => state.tasks
  );

  const { createMutation, updateMutation } = useTasks();

  const isSaving =
    createMutation.isPending || updateMutation.isPending;

  const handleChange = (e) => {
    dispatch(
      setFormData({ [e.target.name]: e.target.value })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const taskData = {
        ...formData
     
      };

      if (editingTaskId) {
        await updateMutation.mutateAsync({
          id: editingTaskId,
          ...taskData,
        });
      } else {
        await createMutation.mutateAsync(taskData);
      }

      dispatch(resetForm());
    } catch (error) {
      alert(error.response?.data?.message || "Could not save task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingTaskId ? "Edit Task" : "Create Task"}</h2>

      <input
        name="title"
        placeholder="Task title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Due Date</label>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        required
      />

      <label>Priority</label>
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit" disabled={isSaving}>
        {isSaving
          ? "Saving..."
          : editingTaskId
            ? "Update Task"
            : "Add Task"}
      </button>

      {editingTaskId && (
        <button
          type="button"
          onClick={() => dispatch(resetForm())}
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
}

export default TaskForm;