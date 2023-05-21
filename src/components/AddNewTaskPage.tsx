import React, { useState } from "react";
import "../AddNewTaskPage.css";
import "../util.css";
const monthOptions = Array.from(Array(12).keys(), (n) => n + 1);
const dateOptions = Array.from(Array(31).keys(), (n) => n + 1);
interface Props {
  toggleShowHome: Function;
  addTodo: Function;
}
export default function AddNewTaskPage({ toggleShowHome, addTodo }: Props) {
  const [newTodo, setNewTodo] = useState({
    name: "",
    month: "01",
    date: "01",
    description: "",
  });

  const changeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const value = event.target.value;
    //console.log(event.target.name, value);
    setNewTodo({ ...newTodo, [event.target.name]: value });
  };
  const submitHandler = (event: React.FormEvent) => {
    console.log("submitting: ", newTodo);

    // preface the month or date with a 0 if its a single digit
    if (newTodo.month.length < 2) newTodo.month = "0" + newTodo.month;
    if (newTodo.date.length < 2) newTodo.date = "0" + newTodo.date;

    event.preventDefault();
    // add this todo onto the todos.
    addTodo(newTodo);
    toggleShowHome(); // return us to homepage
  };

  return (
    <div className="task-form-container">
      <h1 className="text-center">Add a new task</h1>
      <form onSubmit={submitHandler} className="task-form">
        {/* Task Name */}
        <div>
          <label className="py-half" htmlFor="name">
            Task name
          </label>
          <input
            className="text-white background-purple display-block text-input"
            type="text"
            onChange={changeHandler}
            value={newTodo.name}
            name="name"
            required
          />
        </div>
        {/* Date */}
        <div>
          <label htmlFor="month" className="display-block py-half">
            Due Date
          </label>
          <div className="date-container">
            <select
              className="number-select text-white background-purple"
              name="month"
              onChange={changeHandler}
            >
              {monthOptions.map((num) => (
                <option key={num}>{num}</option>
              ))}
            </select>
            <select
              className="number-select text-white background-purple"
              name="date"
              onChange={changeHandler}
            >
              {dateOptions.map((num) => (
                <option key={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Description */}
        <div>
          <label className="display-block py-half" htmlFor="description">
            Description
          </label>
          <textarea
            rows={8}
            className="text-white background-purple task-form-description  description-input"
            name="description"
            onChange={changeHandler}
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="add-button p-1 bold submit-task-button"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
