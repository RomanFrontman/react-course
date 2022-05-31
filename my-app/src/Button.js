import React from "react";

export const Button = ({ disabled = false, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Send feedback
    </button>
  );
};
