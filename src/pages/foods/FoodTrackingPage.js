import './FoodTrackingPage.css';
import SearchBox from './SearchBox';
import DateChange from './DateChange';
import FoodItem from './FoodItem';

function FoodTrackingPage(){
  return (
    <div id="food-tracking-page">
      <div id="food-tracking-main">
        <div id="food-tracking-main-row-1">
          <h1>Food Tracking</h1>
          <DateChange />
        </div>
        <div id="food-tracking-main-row-2">
          <SearchBox />
          or
          <button id="food-tracking-main-add-food-btn">Add a food manually</button>
        </div>
        <div id="food-tracking-page-foods-tracked">
          <h2>Breakfast</h2>
          <FoodItem />
          <FoodItem />
          <FoodItem />
        </div>
      </div>
      <div id="food-tracking-cards">

      </div>
    </div>
  );
}

export default FoodTrackingPage;
