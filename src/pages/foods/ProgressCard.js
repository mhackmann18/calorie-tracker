import './ProgressCard.css';
import BarChart from './BarChart';
import { useState } from 'react';
import EmptyTotals from '../../data/emptyTotals.json';

// PROPS - 2
// data - An array of objects. Each obj has a "date" property whose value is a datestring in ISO 8601 format,
//          as well as a "totals" property which is an object containing macroObjects, each having a "name",
//          "unit", "consumed", and "goal" property
// date - The latest date that will be shown on the bar chart

function ProgressCard(props){

  const [macroIndex, setMacroIndex] = useState(0);
  const [numDaysIndex, setNumDaysIndex] = useState(0);

  const timeScales = [{ numDays: 7, name: "Week"}, { numDays: 31, name: "Month" }, { numDays: 365, name: "Year" }];
  const macroNames = [];

  for(const property in EmptyTotals.totals){
    macroNames.push(property);
  }

  const macroKeyName = macroNames[macroIndex];

  const handleMacroChangeLeft = () => macroIndex === 0 ? setMacroIndex(macroNames.length-1) : setMacroIndex(macroIndex-1);
  const handleMacroChangeRight = () => macroIndex === macroNames.length - 1 ? setMacroIndex(0) : setMacroIndex(macroIndex + 1);

  const handleTimeChangeLeft = () => numDaysIndex === 0 ? setNumDaysIndex(timeScales.length - 1) : setNumDaysIndex(numDaysIndex - 1);
  const handleTimeChangeRight = () => numDaysIndex === timeScales.length - 1 ? setNumDaysIndex(0) : setNumDaysIndex(numDaysIndex + 1);

  return (
    <div id="progress-card" className="side-card">
      <h2>Progress</h2>
      <div id="progress-card-controls">
        <div>
          Show  
          <span>
            <i className="fas fa-caret-left btn" onClick={handleMacroChangeLeft}></i>
            {EmptyTotals.totals[macroKeyName].name}
            <i className="fas fa-caret-right fa-lg btn" onClick={handleMacroChangeRight}></i>
          </span>
        </div>
        <div>
          For the last 
          <span>
            <i className="fas fa-caret-left btn" onClick={handleTimeChangeLeft}></i>
            {timeScales[numDaysIndex].name}
            <i className="fas fa-caret-right fa-lg btn" onClick={handleTimeChangeRight}></i>
          </span>
        </div>
      </div>
      <BarChart data={props.data} date={props.date} numDays={timeScales[numDaysIndex].numDays} macroName={macroKeyName} />
    </div>
  );
}

export default ProgressCard;
