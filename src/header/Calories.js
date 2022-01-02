import './Calories.css';

function Calories(props){

  const widthPercentage = Math.round((props.calsConsumed / props.calGoal + Number.EPSILON) * 100);

  return (
    <div id="main-header-calories">
      <div>
        <span id="main-header-calories-consumed">{props.calsConsumed}</span> of <span id="main-header-calories-goal">{props.calGoal}</span> calories
      </div>
      <div id="main-header-progress-bar">
        <div style={{width: `${widthPercentage <= 100 ? widthPercentage : 100}%`}}></div>
      </div>
    </div>
  );
}

export default Calories;
