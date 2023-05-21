import React from "react";
interface Props {
  toggleShowHome: Function;
}
export default function AddNewTaskPage({ toggleShowHome }: Props) {
  return (
    <div className="background-purple">
      <h1 className="text-white">Add a new task</h1>
      {/* form goes here */}
      <button
        className="add-button"
        onClick={() => {
          toggleShowHome();
        }}
      >
        Add Task
      </button>
    </div>
  );
}
