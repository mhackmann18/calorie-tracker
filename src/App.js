import './App.css';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <div id="container">
        <ul id="tabs">
          <li><span className="selected">Today</span></li>
          <li>All time</li>
        </ul>
        <Header />

        <div className="divider"></div>
        <div id="buttons">
          <button>Track</button>
          <button>Meals</button>
          <button>Runs</button>
          <button>Workouts</button>
        </div>

        <div id="food-tracking-page">
          <div id="food-tracking-main">
            <div id="food-tracking-main-row-1">
              <h2>Food Tracking</h2>
              <div id="food-tracking-main-change-date">
                <i class="fas fa-caret-left"></i>
                <span id="food-tracking-main-date">Today, Sun Dec 26</span>
                <i class="fas fa-caret-right"></i>
              </div>
            </div>
            <div id="food-tracking-main-row-2">
              <div id="food-tracking-main-search-box">
                <input type="text" />
                <i class="fas fa-search"></i>
              </div>
              or
              <button id="food-tracking-main-add-food-btn">Add a food manually</button>
            </div>
            <h3>Breakfast</h3>
            <div className="food-item">
              <div className="food-item-text">
                <h5>Food 1</h5>
                <p>Serving Size: 1 cup</p>
              </div>
              <div className="food-item-btns">
              <i class="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div id="food-tracking-cards">
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
