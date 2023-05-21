import { useState } from "react";
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
  const [showViewMore, setShowViewMore] = useState(false);
  const toggleViewMore = () => {
    setShowViewMore(!showViewMore);
  };
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
      <div
        className="details-box background-light-grey"
        onClick={() => {
          toggleViewMore();
        }}
        tabIndex={0}
      >
        <p className="text-purple bold">
          {showViewMore ? <span>-</span> : <span>+</span>} View more details
        </p>
        {showViewMore && <p className="p-1">{todo.description}</p>}
      </div>
    </div>
  );
}
