import './DateChange.css';
import { useState } from 'react';

function DateChange(){
  const [date, setDate] = useState(new Date());

  console.log(date);

  let options = { weekday: "long", month: "short", day: "numeric" };
  
  function addDay(){
    setDate(date.getDate() + 1);
  }

  function subtractDay(){
    setDate(date.getDate() - 1);
  }

  return (
    <div id="food-tracking-main-change-date">
      <i className="fas fa-caret-left fa-lg btn" onClick={subtractDay}></i>
      <span id="food-tracking-main-date">{date.toDateString()  ? "Today, " : ""}{date.toLocaleDateString("en-US", options)}</span>
      <i className="fas fa-caret-right fa-lg btn" onClick={addDay}></i>
    </div>
  );
}

export default DateChange;
