import React from "react";
import "./addtask.css";
function ErrorMessage({ setShowError }) {
  return (
    <div className="error" onClick={() => setShowError(false)}>
      Please Enter all values
    </div>
  );
}

export default ErrorMessage;
