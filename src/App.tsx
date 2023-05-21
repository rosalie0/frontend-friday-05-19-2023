import { useState } from "react";
import "./App.css";
import PlusButton from "./components/PlusButton";
import AddNewTaskPage from "./components/AddNewTaskPage";

function App() {
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
        <PlusButton toggleShowHome={toggleShowHome} />
      </div>
    );

  // else show add new task component
  return <AddNewTaskPage toggleShowHome={toggleShowHome} />;
}

export default App;
