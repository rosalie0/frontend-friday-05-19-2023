import React, { useState } from "react";
import "../AddNewTaskPage.css";
import "../util.css";
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
        {/* Task Name */}
        <div>
          <label className="py-half" htmlFor="todo-name">
            Task name
          </label>
          <input
            className="text-white background-purple display-block text-input"
            type="text"
            value={newTodo.name}
            name="todo-name"
          />
        </div>
        {/* Date */}
        <div>
          <label htmlFor="todo-month" className="display-block">
            Due Date
          </label>
          <select
            className="number-select text-white background-purple"
            name="todo-month"
            value={newTodo.month}
          >
            {monthOptions.map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
          <select
            className="number-select text-white background-purple"
            name="todo-date"
            value={newTodo.date}
          >
            {dateOptions.map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
        </div>
        {/* Description */}
        <div>
          <label className="display-block py-half " htmlFor="todo-description">
            Description
          </label>
          <input
            className="text-white background-purple task-form-description text-input description-input"
            type="text"
            name="todo-description"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="add-button p-1 bold"
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
