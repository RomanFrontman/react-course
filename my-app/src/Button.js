import React from "react";
import './scss/Button.scss';

export const Button = ({ disabled = false, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Send 
    </button>
  );
};
