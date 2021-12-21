import './App.css';

function App() {
  return (
    <div className="App">
      <div id="container">
        <ul id="tabs">
          <li><span className="selected">Today</span></li>
          <li>All time</li>
        </ul>
        <div id="main-header">
          <div id="main-header-calories">
            <div>
              <span id="main-header-calories-consumed">1395</span> of <span id="main-header-calories-goal">3100</span> calories
            </div>
            <div id="main-header-progress-bar">
              <div></div>
            </div>
          </div>
          <div id="main-header-macros-consumed">
            <ul>
              <li>Fat: 0 g</li>
              <li>Carbs: 0 g</li>
              <li>Protein: 0 g</li>
            </ul>
          </div>
          <div id="main-header-weigh-in">
              <span id="main-header-weigh-in-count">165 <span>lbs</span></span>
              <span>Today's weight</span>
          </div>
          <div id="main-header-miles-ran">
            <span id="main-header-miles-count">3.65 <span>Miles</span></span> 
            <span>Travelled today</span>
          </div>
          <div id="main-header-weight-lifted">
            <span id="main-header-weight-count">13,465 <span>lbs</span></span> 
            <span>Lifted today</span>
          </div>
        </div>

        <div className="divider"></div>

      </div>
    </div>
  );
}

export default App;
