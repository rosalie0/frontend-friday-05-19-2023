import React, { useState } from "react";

const monthOptions = Array.from(Array(12).keys(), (n) => n + 1);
const dateOptions = Array.from(Array(31).keys(), (n) => n + 1);
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
      <form onSubmit={submitHandler} className="task-form">
        <div>
          <label className="text-purple" htmlFor="todo-name">
            Task name
          </label>
          <input
            className="text-white background-purple display-block"
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
            {dateOptions.map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="text-purple display-block"
            htmlFor="todo-description "
          >
            Description
          </label>
          <input
            className="text-white background-purple task-form-description"
            type="text"
            name="todo-description"
          />
        </div>
        <button
          type="submit"
          className="add-button"
          onClick={() => {
            toggleShowHome();
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
