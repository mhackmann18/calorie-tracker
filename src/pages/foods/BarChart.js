// Victory Charts Docs: https://formidable.com/open-source/victory/docs/

import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { ISOStringToDate } from '../../utils';

// PROPS - 4
// data - An array of objects. Each obj has a "date" property whose value is a datestring in ISO 8601 format,
//          as well as a "totals" property which is an object containing macroObjects, each having a "name",
//          "unit", "consumed", and "goal" property
// date - A date object of the latest date that will be shown on the bar chart
// numDays - An integer number representing how many days will show up on the chart
// macroName - The property name of the macro object that will be charted. 
//             Will be used as a key to index the totals object like so: data[i].totals[macroName]

function BarChart(props){
  
  const data = [];

  let dateOptions = { month: "short", day: "numeric" };

  let userData = [...props.data];

  // let index = userData.length - 1;

  for(let i = (props.numDays - 1); i >= 0; --i){
    let date = new Date(props.date);
    date.setDate(date.getDate() - i);

    let quantity;
    let match = false;

    // let dataDateString = ISOStringToDate(userData[index].date).toDateString();
    // let chartDateString = (new Date(date)).toDateString();

    // if(dataDateString === chartDateString && index >= 0){
    //   quantity = userData[index].totals[props.macroName].consumed;
    //   --index;
    // } else {
    //   quantity = 0;
    // }

    for(let j = 0; j < userData.length; ++j){
      let dataDateString = ISOStringToDate(userData[j].date).toDateString();
      let chartDateString = (new Date(date)).toDateString();
      if(dataDateString === chartDateString){
        quantity = userData[j].totals[props.macroName].consumed;
        data.push({
          date: date.toLocaleDateString("en-US", dateOptions), 
          quantity
        });
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
