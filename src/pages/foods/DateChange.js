import './DateChange.css';

function DateChange(props){

  let options = { weekday: "long", month: "short", day: "numeric" };
  
  function addDay(){
    let dateCopy = new Date(props.date);
    dateCopy.setDate(dateCopy.getDate() + 1);
    props.onDateChange(dateCopy);
  }

  function subtractDay(){
    let dateCopy = new Date(props.date);
    dateCopy.setDate(dateCopy.getDate() - 1);
    props.onDateChange(dateCopy);
  }

  return (
    <div id="food-tracking-main-change-date">
      <i className="fas fa-caret-left fa-lg btn" onClick={subtractDay}>&lt;</i>
      <span>
        {(new Date(props.date)).toDateString() === (new Date()).toDateString() ? "Today, " : ""}
        {(new Date(props.date)).toLocaleDateString("en-US", options)}
      </span>
      <i className="fas fa-caret-right fa-lg btn" onClick={addDay}>&gt;</i>
    </div>
  );
}

export default DateChange;
