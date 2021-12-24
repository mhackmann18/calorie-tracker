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
        <div id="nutrition-main">
          <div id="nutrition-main-left">
            <div id="nutrition-main-left-upper">

            </div>
            <div id="nutrition-main-left-lower">
              
            </div>
          </div>
          <div id="nutrition-main-right">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
