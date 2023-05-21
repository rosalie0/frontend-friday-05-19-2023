import React from "react";
interface TodoInterface {
  name: string;
  month: string[2];
  date: string[2];
  description: string;
}
interface Props {
  todo: TodoInterface;
}

export default function TodoItem({ todo }: Props) {
  return (
    <div className="todo-item-container background-white">
      <div className="todo-item-container-top-half">
        <h2 className="text-purple">{todo.name}</h2>
        <p className="py-half">
          <span className="bold">Due Date: </span>
          <span className="text-purple">
            {todo.month}/{todo.date}
          </span>
        </p>
      </div>
      <div className="background-light-grey details-box">
        <p className="text-purple bold ">+ View more details</p>
      </div>
    </div>
  );
}
