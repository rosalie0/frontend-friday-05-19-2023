import { useState } from "react";
import "./App.css";
import PlusButton from "./components/PlusButton";
import AddNewTaskPage from "./components/AddNewTaskPage";
import TodoItem from "./components/TodoItem";

const dummyData = [
  {
    name: "Take Bruno to vet",
    month: "05",
    date: "23",
    description: "Remember to give gabapentin 1 hour before",
  },
  {
    name: "Reminder: Attend Mobile & Web Dev Summit !!",
    month: "05",
    date: "24",
    description: "starts at 9am",
  },
];

function App() {
  const [todos, setTodos] = useState(dummyData);
  // state to control if we show homepage or the 'add new task' screen.
  const [showHome, setShowHome] = useState(true);
  const toggleShowHome = () => {
    console.log("toggled");
    setShowHome(!showHome);
  };

  // if not clicked, show homepage
  if (showHome)
    return (
      <div className="background-purple">
        <h1>My TodoList App</h1>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
        <PlusButton toggleShowHome={toggleShowHome} />
      </div>
    );

  // else show add new task component
  return <AddNewTaskPage toggleShowHome={toggleShowHome} />;
}

export default App;
