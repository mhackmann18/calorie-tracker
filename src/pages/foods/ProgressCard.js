import './ProgressCard.css';
import BarChart from './BarChart';
import { useState } from 'react';

function ProgressCard(props){

  const [macroIndex, setMacroIndex] = useState(0);
  const [numDaysIndex, setNumDaysIndex] = useState(0);

  const timeScales = [{ numDays: 7, name: "Week"}, { numDays: 31, name: "Month" }, { numDays: 365, name: "Year" }];

  let todaysTotals;

  for(let day of props.totals){
    let selectedDateString = (new Date(day.date.replace(/-/g, '/').replace(/T.+/, ''))).toDateString();
    let currentDateString = (new Date(props.date)).toDateString();
    if(selectedDateString === currentDateString){
      todaysTotals = day.totals;
    }
  }

  function handleMacroChangeLeft(){
    if(macroIndex === 0){
      setMacroIndex(todaysTotals.length - 1);
    } else {
      setMacroIndex(macroIndex - 1);
    }
  }

  function handleMacroChangeRight(){
    if(macroIndex === todaysTotals.length - 1){
      setMacroIndex(0);
    } else {
      setMacroIndex(macroIndex + 1);
    }
  }

  function handleNumDayChangeLeft(){
    if(numDaysIndex === 0){
      setNumDaysIndex(timeScales.length - 1);
    } else {
      setNumDaysIndex(numDaysIndex - 1);
    }
  }

  function handleNumDayChangeRight(){
    if(numDaysIndex === timeScales.length - 1){
      setNumDaysIndex(0);
    } else {
      setNumDaysIndex(numDaysIndex + 1);
    }
  }

  return (
    <div id="progress-card" className="side-card">
      <h2>Progress</h2>
      <div id="progress-card-controls">
        <div>
          <i className="fas fa-caret-left btn" onClick={handleMacroChangeLeft}></i>
          <span>{todaysTotals[macroIndex].name}</span>
          <i className="fas fa-caret-right fa-lg btn" onClick={handleMacroChangeRight}></i>
        </div>
        <div>
          <i className="fas fa-caret-left btn" onClick={handleNumDayChangeLeft}></i>
          <span>{timeScales[numDaysIndex].name}</span>
          <i className="fas fa-caret-right fa-lg btn" onClick={handleNumDayChangeRight}></i>
        </div>
      </div>
      <BarChart date={props.date} numDays={timeScales[numDaysIndex].numDays} />
    </div>
  );
}

export default ProgressCard;
