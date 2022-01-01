import { VictoryBar, VictoryChart } from 'victory';

function BarChart(props){
  // https://formidable.com/open-source/victory/docs/

  const data = [
    {date: 1, calories: 1300},
    {date: 2, calories: 1650},
    {date: 3, calories: 1425},
    {date: 4, calories: 1900}
  ];

  return (
    <div>
      <VictoryChart>
        <VictoryBar data={data} x="date" y="calories"/>
      </VictoryChart>
    </div>
  );
}

export default BarChart;
