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

      </div>
    </div>
  );
}

export default App;
