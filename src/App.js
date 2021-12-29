import './App.css';
import Header from './header/Header';
import FoodTrackingPage from './pages/foods/FoodTrackingPage';

function App() {
  return (
    <div className="App">
      <div id="container">
        <ul id="tabs">
          <li><span className="selected">Today</span></li>
          <li>All time</li>
        </ul>
        <Header />

        {/* <div className="divider"></div> */}
        <div id="nav-buttons">
          <button>Track</button>
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
