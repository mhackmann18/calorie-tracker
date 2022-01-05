import './ProgressCard.css';
import BarChart from './BarChart';
import { useState } from 'react';
import EmptyTotals from '../../data/emptyTotals.json';

function ProgressCard(props){

  const [macroIndex, setMacroIndex] = useState(0);
  const [numDaysIndex, setNumDaysIndex] = useState(0);

  const timeScales = [{ numDays: 7, name: "Week"}, { numDays: 31, name: "Month" }, { numDays: 365, name: "Year" }];
  let todaysTotals;
  
  // Check if there's any data for the current day
  let selectedDateString = (new Date(props.totals[props.totals.length - 1].date.replace(/-/g, '/').replace(/T.+/, ''))).toDateString();
  let currentDateString = (new Date(props.date)).toDateString();

  if(selectedDateString === currentDateString){
    todaysTotals = props.totals[props.totals.length - 1].totals;
  } else {
    todaysTotals = EmptyTotals.totals;
  }
  
  return (
    <div id="progress-card" className="side-card">
      <h2>Progress</h2>
      <div id="progress-card-controls">
        <div>
          <i className="fas fa-caret-left btn" 
            onClick={() => macroIndex === 0 ? setMacroIndex(todaysTotals.length-1) : setMacroIndex(macroIndex-1)}
          >&lt;</i>
          <span>{todaysTotals[macroIndex].name}</span>
          <i className="fas fa-caret-right fa-lg btn" 
            onClick={() => macroIndex === todaysTotals.length - 1 ? setMacroIndex(0) : setMacroIndex(macroIndex + 1)}
          >&gt;</i>
        </div>
        <div>
          <i className="fas fa-caret-left btn" 
            onClick={() => numDaysIndex === 0 ? setNumDaysIndex(timeScales.length - 1) : setNumDaysIndex(numDaysIndex - 1)}
          >&lt;</i>
          <span>{timeScales[numDaysIndex].name}</span>
          <i className="fas fa-caret-right fa-lg btn" 
            onClick={() => numDaysIndex === timeScales.length - 1 ? setNumDaysIndex(0) : setNumDaysIndex(numDaysIndex + 1)}
          >&gt;</i>
        </div>
      </div>
      <BarChart data={props.totals} date={props.date} numDays={timeScales[numDaysIndex].numDays} />
    </div>
  );
}

export default ProgressCard;
