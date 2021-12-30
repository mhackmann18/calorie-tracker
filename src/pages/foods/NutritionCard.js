import { useState } from 'react';
import './NutritionCard.css';

function NutritionCard(props){

  const [expanded, setExpanded] = useState(false);

  let tableRows = [];

  for(let i = 0; i < 4; ++i){
    const { name, unit, consumed, goal } = props.nutrients[i];
    tableRows.push(
      <tr key={i}>
        <td>{name}</td>
        <td>{consumed} {unit}</td>
        <td>{goal ? goal - consumed : 0} {unit}</td>
      </tr>
    );
  }

  function handleClick(){
    tableRows = [];
    let numRows = 4;

    if(!expanded){
      numRows = props.nutrients.length;
    }

    for(let i = 0; i < numRows; ++i){
      const { name, unit, consumed, goal } = props.nutrients[i];
      tableRows.push(
        <tr key={i}>
          <td>{name}</td>
          <td>{consumed} {unit}</td>
          <td>{goal ? goal - consumed : 0} {unit}</td>
        </tr>
      );
    }

    expanded ? setExpanded(false) : setExpanded(true);
  }

  return (
    <div className="side-card">
      <h2>Nutrition Totals</h2>
      <table id="food-tracking-nutrition-table">
        <tbody>
          <tr>
            <th></th>
            <th>Total</th>
            <th>Until goal</th>
          </tr>
          {tableRows}
        </tbody>
      </table>
      <button onClick={handleClick}>{expanded ? "View Less" : "View All"}</button>
    </div>
  );
}

export default NutritionCard;
