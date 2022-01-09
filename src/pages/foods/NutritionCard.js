import './NutritionCard.css';
import { useState } from 'react';
import { areDatesSameDay, ISOStringToDate } from '../../utils';
import EmptyTotals from '../../data/emptyTotals.json';

// PROPS - 2
// data - An array of objects. Each obj has a "date" property whose value is a datestring in ISO 8601 format,
//          as well as a "totals" property which is an object containing macroObjects, each having a "name",
//          "unit", "consumed", and "goal" property
// date - A date object for the date for which the user's nutritional totals will be shown

function NutritionCard(props){

  const [expanded, setExpanded] = useState(false);
  const defaultNumRows = 8;

  console.log(props.data);

  function getTableRows(n){
    let totals = EmptyTotals.totals;

    for(let i = props.data.length - 1; i >= 0; --i){
      if(areDatesSameDay(ISOStringToDate(props.data[i].date), (new Date(props.date)))){
        totals = props.data[i].totals;
        break;
      } 
    }

    let i = 0;
    const rows = [];
    
    for(const key in totals){
      if(i === n)
        break; 

      const { name, unit, consumed, goal } = totals[key];
      rows.push(
        <tr key={i}>
          <td>{name}</td>
          <td>{consumed} {unit}</td>
          <td>{goal - consumed < 0 ? 0 : goal - consumed} {unit}</td>
        </tr>
      );
      ++i;
    }

    return rows;
  }
  
  return (
    <div id="nutrition-card" className="side-card">
      <h2>Nutrition Totals</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Total</th>
            <th>Until goal</th>
          </tr>
          {expanded ? getTableRows(props.nutrients.length) : getTableRows(defaultNumRows)}
        </tbody>
      </table>
      <button onClick={() => expanded ? setExpanded(false) : setExpanded(true)}>
        {expanded ? "Show Less" : "Show All"}
      </button>
    </div>
  );
}

export default NutritionCard;
