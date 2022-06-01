import React from "react";
import './scss/FeedbackList.scss';

export const FeedbackList = ({ list }) => {
  return (
    <div className="FeedbackList">
      {list.map((el) => (
        <p>
          <span className="rate">
            {el.rate}
          </span>
          <span className="text">
            {el.rateText}
          </span>
        </p>
      ))}
    </div>
  );
};