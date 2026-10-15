import TaskForm from "./features/tasks/TaskForm";
import TaskList from "./features/tasks/TaskList";

function App() {
  return (
    <main>
      <h1>Task Planner</h1>
      <TaskForm />
      <hr />
      <TaskList />
    </main>
  );
}

export default App;