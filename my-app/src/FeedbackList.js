import React from "react";

export const FeedbackList = ({ list }) => {
  return (
    <ul>
      {list.map((el) => (
        <p>
          <span>
            {el.rate}-{el.rateText}
          </span>
        </p>
      ))}
    </ul>
  );
};