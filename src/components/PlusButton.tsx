import React from "react";
import "../App.css";

interface Props {
  togglePlusButtonClicked: Function;
}
export default function PlusButton({ togglePlusButtonClicked }: Props) {
  return (
    <div className="circle-button-container">
      <button
        className="add-button circle-button"
        onClick={() => {
          togglePlusButtonClicked();
        }}
      >
        +
      </button>
    </div>
  );
}
