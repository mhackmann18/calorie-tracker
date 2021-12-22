import './Calories.css';

function Calories(props){
  return (
    <div id="main-header-calories">
      <div>
        <span id="main-header-calories-consumed">{props.calsConsumed}</span> of <span id="main-header-calories-goal">{props.calGoal}</span> calories
      </div>
      <div id="main-header-progress-bar">
        <div></div>
      </div>
    </div>
  );
}

export default Calories;