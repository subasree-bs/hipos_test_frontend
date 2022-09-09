import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const options = {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light2", // "light1", "dark1", "dark2"
	title: {
		text: "Bounce Rate by Week of Year"
	},
	axisY: {
		title: "Bounce Rate",
		suffix: "%"
	},
	axisX: {
		title: "Week of Year",
		prefix: "W",
		interval: 2
	},
	data: [{
		type: "column",
		toolTipContent: "Week {x}: {y}",
		dataPoints: [
			{ x: 1, y: 64 },
			{ x: 2, y: 30 },
			{ x: 3, y: 20 },
			
		]
	}]
};

function Barchart() {
	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
}
export default Barchart;
