import './FoodTrackingPage.css';
import SearchBox from './SearchBox';
import DateChange from './DateChange';
import NutritionCard from './NutritionCard';
import ProgressCard from './ProgressCard';
import TrackedFoods from './TrackedFoods';
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
        <TrackedFoods data={null} date={date} />
      </div>
      <div id="food-tracking-cards">
        <NutritionCard data={totals} date={date} />
        <ProgressCard data={totals} date={date} />
      </div>
    </div>
  );
}

export default FoodTrackingPage;
