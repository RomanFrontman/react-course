import './scss/App.scss';
import React, { useState } from "react";
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Button } from './Button.js';
import { FeedbackList } from "./FeedbackList.js";
import { List } from "./List.js";



export default function App() {
  const studentsName = "Roman Chaus"
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState(10);
  const [feedbackList, setFeedbackList] = useState([]);

const handleInputChange = (event) => {
  const value = event.target.value;
  setFeedbackText(value);
};

const onRatingChange = (event) => {
  const value = +event.currentTarget.value;
  setRating(value);
};

const onButtonClick = () => {
  setFeedbackList([
    ...feedbackList,
    { rate: rating, rateText: feedbackText }
  ]);
  setRating(10);
  setFeedbackText("");
};

  return (
    
    <div className="App">
      <Header name={studentsName}/>
      <div className="content">

        
          <h2>How would you rate our course?</h2>
        
        <List
            listLength={10}
            rating={rating}
            onRatingChange={onRatingChange}
          />
        <div className="controlling">
          <input
            type="text"
            name="textInput"
            placeholder='Write your text'
            value={feedbackText}
            onChange={handleInputChange}
          />
          <Button disabled={!feedbackText} onClick={onButtonClick} 
          />
        </div>
      </div>
      <br />
      <FeedbackList list={feedbackList} />
      <br />
      <Footer name={studentsName}/>
    </div>
  );
}