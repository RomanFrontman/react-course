import React from "react";

export const List = ({listLength = 10, rating, onRatingChange }) => {
    return (
        <ul>
            {Array.from({ length: listLength }, (_, i) => {
                return (
                <li>
                    <input 
                    type="radio" 
                    name="rating" 
                    id={`num${i + 1}`}
                    checked={rating === i + 1}
                    onChange={onRatingChange}
                    value={i + 1} 
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
                );
            })}
        </ul>
    )
  }
