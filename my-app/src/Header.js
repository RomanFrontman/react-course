import React from "react";
import './scss/Header.scss';

export const Header = (props) => {
  return (
        <div>
            <h1>Feedback Project from Usoftware acadamy by { props.name }</h1>
        </div>
  )
}