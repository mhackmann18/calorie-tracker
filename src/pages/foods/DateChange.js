import './DateChange.css';
import { useState } from 'react';

function DateChange(){
  const [date, setDate] = useState(new Date());

  let options = { weekday: "long", month: "short", day: "numeric" };
  
  function handleRightClick(){
    let dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() + 1);
    setDate(dateCopy);
  }

  function handleLeftClick(){
    let dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() - 1);
    setDate(dateCopy);
  }

  return (
    <div id="food-tracking-main-change-date">
      <i className="fas fa-caret-left fa-lg btn" onClick={handleLeftClick}></i>
      <span id="food-tracking-main-date">{(new Date(date)).toDateString() === (new Date()).toDateString()  ? "Today, " : ""}{(new Date(date)).toLocaleDateString("en-US", options)}</span>
      <i className="fas fa-caret-right fa-lg btn" onClick={handleRightClick}></i>
    </div>
  );
}

export default DateChange;
