import './ProgressCard.css';
import BarChart from './BarChart';
import { useState } from 'react';
import EmptyTotals from '../../data/emptyTotals.json';

function ProgressCard(props){

  const [macroIndex, setMacroIndex] = useState(0);
  const [numDaysIndex, setNumDaysIndex] = useState(0);

  const timeScales = [{ numDays: 7, name: "Week"}, { numDays: 31, name: "Month" }, { numDays: 365, name: "Year" }];
  let macroNames = [];
  let todaysTotals;
  
  // Check if there's any data for the current day
  let latestDataDateString = props.totals[props.totals.length - 1].date;

  let selectedDateString = (ISOStringToDate(latestDataDateString)).toDateString();
  let currentDateString = (new Date(props.date)).toDateString();

  if(selectedDateString === currentDateString){
    todaysTotals = props.totals[props.totals.length - 1].totals;
  } else {
    todaysTotals = EmptyTotals.totals;
  }

  for(const property in todaysTotals){
    macroNames.push(property);
  }

  let macroName = macroNames[macroIndex];

  return (
    <div id="progress-card" className="side-card">
      <h2>Progress</h2>
      <div id="progress-card-controls">
        <div>
          Show  
          <i className="fas fa-caret-left btn" 
            onClick={() => macroIndex === 0 ? setMacroIndex(macroNames.length-1) : setMacroIndex(macroIndex-1)}
          ></i>
          <span>{todaysTotals[macroName].name}</span>
          <i className="fas fa-caret-right fa-lg btn" 
            onClick={() => macroIndex === macroNames.length - 1 ? setMacroIndex(0) : setMacroIndex(macroIndex + 1)}
          ></i>
        </div>
        <div>
          For the last 
          <i className="fas fa-caret-left btn" 
            onClick={() => numDaysIndex === 0 ? setNumDaysIndex(timeScales.length - 1) : setNumDaysIndex(numDaysIndex - 1)}
          ></i>
          <span>{timeScales[numDaysIndex].name}</span>
          <i className="fas fa-caret-right fa-lg btn" 
            onClick={() => numDaysIndex === timeScales.length - 1 ? setNumDaysIndex(0) : setNumDaysIndex(numDaysIndex + 1)}
          ></i>
        </div>
      </div>
      <BarChart data={props.totals} date={props.date} numDays={timeScales[numDaysIndex].numDays} macroName={macroName} />
    </div>
  );

  function ISOStringToDate(string){
    return new Date(string.replace(/-/g, '/').replace(/T.+/, ''));
  }
}

export default ProgressCard;
