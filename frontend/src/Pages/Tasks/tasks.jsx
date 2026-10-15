import TaskForm from "../../components/tasks/TaskForm";
import TaskList from "../../components/tasks/TaskList";

function TasksPage() {
  return (
    <main>
      <h1>Todo Task Planner</h1>

      <TaskForm />

      <hr />

      <TaskList />
    </main>
  );
}

export default TasksPage;