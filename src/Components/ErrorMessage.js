import React from "react";
import "./CSS/addtask.css";
import { ImCross } from "react-icons/im";
function ErrorMessage({ setShowError, content }) {
  return (
    <div className="error" onClick={() => setShowError(false)}>
      <div className="modal">
        <h1> {content}</h1>
        <button className="close-btn">
          <ImCross />
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;
