import { useState } from 'react';
import './NutritionCard.css';

function NutritionCard(props){

  const [expanded, setExpanded] = useState(false);
  const defaultNumRows = 8;

  function getTableRows(n){
    let rows = [];

    for(let i = 0; i < n; ++i){
      const { name, unit, consumed, goal } = props.nutrients[i];
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
