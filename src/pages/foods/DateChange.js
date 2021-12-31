import './DateChange.css';

function DateChange(){
  return (
    <div id="food-tracking-main-change-date">
      <i className="fas fa-caret-left fa-lg btn"></i>
      <span id="food-tracking-main-date">Today, Sun Dec 26</span>
      <i className="fas fa-caret-right fa-lg btn"></i>
    </div>
  );
}

export default DateChange;
