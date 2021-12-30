import './FoodTrackingPage.css';
import SearchBox from './SearchBox';
import DateChange from './DateChange';
import FoodItem from './FoodItem';
import NutritionCard from './NutritionCard';

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
          <h2>Lunch</h2>
          <FoodItem />
          <FoodItem />
          <h2>Dinner</h2>
          <FoodItem />
          <FoodItem />
        </div>
      </div>
      <div id="food-tracking-cards">
        <NutritionCard nutrients = {[
          { name: "Calories", unit: "", consumed: 1685, goal: 3100 },
          { name: "Fat", unit: "g", consumed: 0, goal: 80 },
          { name: "Carbs", unit: "g", consumed: 0, goal: 200 },
          { name: "Protein", unit: "g", consumed: 0, goal: 225 },
          { name: "Cholesterol", unit: "mg", consumed: 195, goal: 0 },
          { name: "Sodium", unit: "mg", consumed: 65, goal: 0 },
          { name: "Calcium", unit: "mg", consumed: 2, goal: 0 },
          { name: "Iron", unit: "mg", consumed: 0, goal: 0 },
          { name: "Vitamin A", unit: "mcg", consumed: 10, goal: 0 },
          { name: "Vitamin C", unit: "mcg", consumed: 0, goal: 0 }
        ]}/>
        <div className="side-card">
          <h2>Progress</h2>
        </div>
      </div>
    </div>
  );
}

export default FoodTrackingPage;
