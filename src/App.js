import './App.css';
import Header from './header/Header';
import FoodTrackingPage from './pages/foods/FoodTrackingPage';
import { useState } from 'react';

function App() {
  const [headerData, setHeaderData] = useState({
    nutrition: {
      calories: 1685,
      caloriesGoal: 3300,
      fat: 81,
      carbohydrates: 200,
      protein: 112,
    },
    items: [
      { number: 155, unit: "lbs", text: "Today's weight" },
      { number: 3.65, unit: "miles", text: "Ran today" },
      { number: 13000, unit: "lbs", text: "Lifted today" },
    ]
  });

  function handleClick(){
    const { calories, caloriesGoal, fat, carbohydrates, protein } = headerData.nutrition;
    setHeaderData({
      nutrition: {
        calories: calories + 300,
        caloriesGoal,
        fat,
        carbohydrates,
        protein
      },
      items: [...headerData.items]
    })
  }

  return (
    <div className="App">
      <div id="container">
        <Header data={headerData}/>

        <div id="nav-buttons">
          <button onClick={handleClick}>Track</button>
          <button>Meals</button>
          <button>Runs</button>
          <button>Workouts</button>
        </div>
        <div className="divider"></div>

        <FoodTrackingPage />

      </div>
    </div>
  );
}

export default App;
