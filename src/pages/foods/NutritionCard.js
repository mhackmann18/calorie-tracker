import { useState } from 'react';
import './NutritionCard.css';
// import EmptyTotals from '../../data/emptyTotals.json';

// PROPS - 2
// data - An array of objects. Each obj has a "date" property whose value is a datestring in ISO 8601 format,
//          as well as a "totals" property which is an object containing macroObjects, each having a "name",
//          "unit", "consumed", and "goal" property
// date - A date object for the date for which the user's nutritional totals will be shown

function NutritionCard(props){

  const [expanded, setExpanded] = useState(false);
  const defaultNumRows = 8;

  function getTableRows(n){
    let rows = [];

    // for(let dayData of props.data){

    // }

    for(let i = 0; i < n; ++i){
      const { name, unit, consumed, goal } = props.data[i];
      rows.push(
        <tr key={i}>
          <td>{name}</td>
          <td>{consumed} {unit}</td>
          <td>{goal ? goal - consumed : 0} {unit}</td>
        </tr>
      );
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
