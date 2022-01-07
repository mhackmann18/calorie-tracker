// https://formidable.com/open-source/victory/docs/
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

function BarChart(props){
  
  const data = [];

  console.log(props.macroName);

  let dateOptions = { month: "short", day: "numeric" };

  let userData = [...props.data];

  for(let i = (props.numDays - 1); i >= 0; --i){
    let date = new Date(props.date);
    date.setDate(date.getDate() - i);

    let quantity;
    let match = false;

    for(let j = 0; j < userData.length; ++j){
      let dataDateString = (new Date(userData[j].date.replace(/-/g, '/').replace(/T.+/, ''))).toDateString();
      let chartDateString = (new Date(date)).toDateString();
      if(dataDateString === chartDateString){
        quantity = userData[j].totals[props.macroName].consumed;
        data.push({
          date: date.toLocaleDateString("en-US", dateOptions), 
          quantity
        });
        console.log(data);
        match = true;
      }
    }

    if(!match){
      data.push({
        date: date.toLocaleDateString("en-US", dateOptions), 
        quantity: 0
      });
    }
  }

  return (
    <div>
      <VictoryChart domainPadding={20}>
        <VictoryBar data={data} x="date" y="quantity" />
        <VictoryAxis fixLabelOverlap={true} />
        <VictoryAxis dependentAxis tickFormat={(x) => (`${x} ${userData[0].totals[props.macroName].unit}`)} />
      </VictoryChart>
    </div>
  );
}

export default BarChart;
