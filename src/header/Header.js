import '../App.css';
import Calories from './Calories';
import Macros from './Macros';
import HeaderItem from './HeaderItem';

function Header(){
  return(
    <div id="main-header">
      <Calories calsConsumed={1685} calGoal={3100} />
      <Macros fat={0} carbs={0} protein={0}/>
      <HeaderItem number={165} unit="lbs" text="Today's weight" />
      <HeaderItem number={3.65} unit="Miles" text="Travelled today" />
      <HeaderItem number={13465} unit="lbs" text="Lifted today" />
    </div>
  );
}

export default Header;
