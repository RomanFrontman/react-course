import React from "react";
import { List } from './Input.js';

export const Content = () => {
    return (
    <div>
        <div> How would you rate our course? 
        </div>
        <List listLength={8} />
    </div>
    )
  }