import './FoodTrackingPage.css';
import SearchBox from './SearchBox';
import DateChange from './DateChange';
import FoodItem from './FoodItem';
import NutritionCard from './NutritionCard';
import ProgressCard from './ProgressCard';
import { useState } from 'react';
import Totals from '../../data/totals.json';

function FoodTrackingPage(){
  // https://extendsclass.com/json-generator.html
   
  const [totals] = useState(Totals);
  const [date, setDate] = useState(new Date());

  return (
    <div id="food-tracking-page">
      <div id="food-tracking-main">
        <div id="food-tracking-main-row-1">
          <h1>Food Tracking</h1>
          <DateChange date={date} onDateChange={setDate} />
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
        <NutritionCard data={totals} date={date} />
        <ProgressCard data={totals} date={date} />
      </div>
    </div>
  );
}

export default FoodTrackingPage;
