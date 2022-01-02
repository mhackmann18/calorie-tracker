import '../App.css';
import Calories from './Calories';
import Macros from './Macros';
import HeaderItem from './HeaderItem';

function Header(props){
  
  const { calories, caloriesGoal, fat, carbohydrates, protein } = props.data.nutrition;

  let headerItems = [];

  for(let i = 0; i < props.data.items.length; ++i){
    const { number, unit, text } = props.data.items[i];
    headerItems.push(<HeaderItem key={i} number={number} unit={unit} text={text} />)
  }

  return(
    <div id="main-header">
      <Calories calsConsumed={calories} calGoal={caloriesGoal} />
      <Macros fat={fat} carbs={carbohydrates} protein={protein}/>
      {headerItems}
    </div>
  );
}

export default Header;
