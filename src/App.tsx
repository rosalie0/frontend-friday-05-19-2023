import { useState } from "react";
import "./App.css";
import PlusButton from "./components/PlusButton";
import AddNewTaskPage from "./components/AddNewTaskPage";

function App() {
  // state to control if we show homepage or the 'add new task' screen.
  const [plusButtonClicked, setPlusButtonClicked] = useState(false);

  // if not clicked, show homepage
  if (!plusButtonClicked)
    return (
      <>
        <div className="container">
          <h1>My TodoList App</h1>
          <PlusButton />
        </div>
      </>
    );

  // else show add new task component
  return <AddNewTaskPage />;
}

export default App;
