import { useDispatch } from "react-redux";
import { editTask } from "../../store/taskSlice";
import { useTasks } from "../../hooks/useTasks.js";

function TaskList() {
  const dispatch = useDispatch();

  const {
    tasksQuery,
    updateMutation,
    deleteMutation,
  } = useTasks();

  if (tasksQuery.isLoading) return <p>Loading tasks...</p>;

  if (tasksQuery.isError) {
    return <p>Could not load tasks. Check your backend.</p>;
  }

  const tasks = tasksQuery.data || [];

  if (tasks.length === 0) return <p>No tasks yet. Add one above!</p>;

  return (
    <section>
      <h2>My Tasks ({tasks.length})</h2>

      {tasks.map((task) => (
        <article key={task._id}>
          <h3>{task.title}</h3>

          <p>{task.description || "No description"}</p>

          <p>
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>

          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>

          <button
            onClick={() =>
              updateMutation.mutate({
                id: task._id,
                status:
                  task.status === "Completed"
                    ? "Pending"
                    : "Completed",
              })
            }
          >
            {task.status === "Completed"
              ? "Mark Pending"
              : "Mark Completed"}
          </button>

          <button onClick={() => dispatch(editTask(task))}>
            Edit
          </button>

          <button
            onClick={() => {
              if (window.confirm("Delete this task?")) {
                deleteMutation.mutate(task._id);
              }
            }}
          >
            Delete
          </button>
        </article>
      ))}
    </section>
  );
}

export default TaskList;