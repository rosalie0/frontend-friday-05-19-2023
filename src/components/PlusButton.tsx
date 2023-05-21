import React from "react";
import "../App.css";

interface Props {
  toggleShowHome: Function;
}
export default function PlusButton({ toggleShowHome }: Props) {
  return (
    <div className="circle-button-container">
      <button
        className="add-button circle-button"
        onClick={() => {
          toggleShowHome();
        }}
      >
        +
      </button>
    </div>
  );
}
