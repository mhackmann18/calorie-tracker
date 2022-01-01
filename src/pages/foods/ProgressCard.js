import './ProgressChart.css';
import BarChart from './BarChart';

function ProgressChart(props){
  return (
    <div className="side-card">
      <h2>Progress</h2>
      <BarChart />
    </div>
  );
}

export default ProgressChart;
