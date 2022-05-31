import React from "react";
import { List } from './List.js';

export const Content = () =>  (
    <div>
        <div> 
           <p> How would you rate our course? </p>
        </div>
        <List listLength={10} />
    </div>
    )
  