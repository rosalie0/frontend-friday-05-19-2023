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
    <div>
      <h2>{todo.name}</h2>
      <p>
        Due Date: {todo.month} / {todo.date}
      </p>
      <div className="details-box">
        <p>View more details</p>
      </div>
    </div>
  );
}
