import React from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
	animationEnabled: true,
	exportEnabled: true,
  showInLegend:true,
	theme: "light2",
	title: {
		text: "Expense Report"
	},
	axisY: {
		title: "Values",
		suffix: "%"
	},
	axisX: {
		title: "Total Expense",
		prefix: "W",
		interval: 2
	},
	data: [{
		type: "line",
		toolTipContent: "Week {x}: {y}%",
		dataPoints: [
			
		]
	}]
};
function ExpenseChart() {
	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
}
export default ExpenseChart;
