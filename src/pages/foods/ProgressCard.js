import './ProgressCard.css';
import BarChart from './BarChart';

function ProgressCard(props){
  const days = 7;

  return (
    <div className="side-card">
      <h2>Progress</h2>
      <BarChart date={props.date} numDays={days} />
    </div>
  );
}

export default ProgressCard;
