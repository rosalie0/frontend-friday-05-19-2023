import React, { useState } from "react";

const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dateOptions = [1, 2];
interface Props {
  toggleShowHome: Function;
}
export default function AddNewTaskPage({ toggleShowHome }: Props) {
  const [newTodo, setNewTodo] = useState({ name: "", description: "" });

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="background-white">
      <h1>Add a new task</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label className="text-purple" htmlFor="todo-name">
            Task name
          </label>
          <input
            className="text-white background-purple"
            type="text"
            value={newTodo.name}
            name="todo-name"
          />
        </div>
        <div>
          <select
            className="text-white background-purple"
            name="todo-month"
            value={newTodo.month}
          >
            {monthOptions.map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
          <select
            className="text-white background-purple"
            name="todo-date"
            value={newTodo.date}
          >
            {/* opts */}
          </select>
        </div>
        <div>
          <input
            className="text-white background-purple"
            type="text"
            name="todo-description"
          />
        </div>
      </form>
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
