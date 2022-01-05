// https://formidable.com/open-source/victory/docs/
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

function BarChart(props){
  
  const data = [];

  let dateOptions = { month: "short", day: "numeric" };

  let userData = [...props.data];
  console.log(userData);

  for(let i = (props.numDays - 1); i >= 0; --i){
    let date = new Date(props.date);
    date.setDate(date.getDate() - i);

    data.push({
      date: date.toLocaleDateString("en-US", dateOptions), 
      quantity: Math.floor(Math.random() * (3500 + 1))
    });
  }

  return (
    <div>
      <VictoryChart domainPadding={20}>
        <VictoryBar data={data} x="date" y="quantity" />
        <VictoryAxis fixLabelOverlap={true} />
        <VictoryAxis dependentAxis tickFormat={(x) => (`${x}`)} />
      </VictoryChart>
    </div>
  );
}

export default BarChart;
