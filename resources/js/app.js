
// Generate a mixed bar/line chart which clearly shows:
// 			How many contracts and quotes were generated each day within the last 3 weeks. (bar) v/
// 			The weekly hire value (line)
// 			Show dates in dd/mm/YYYY format on the X axis;
// 			Show appropriate Y Axis for each bar/line of the chart.
// Bonus:
// 			Calculate and show as a line, the moving average of weekly hire.


function createCharts(rentAll) {
	const barChartX = document.getElementById("barOne");
	const lineChartX = document.getElementById("lineOne");

	var newLabels = [];
	var newContracts = [];
	var newQuotes = [];
	var newHireValues = [];
	rentAll.forEach(e => {
		// console.log("date: "+e.gen_date+", contracts: "+e.contracts);
		newLabels.push(e.gen_date);
		newContracts.push(e.contracts);
		newQuotes.push(e.quotes);
		newHireValues.push(e.weekly_value);
	});

	// console.log("rentAll: "+JSON.stringify(rentAll));
	// console.log("labels: "+JSON.stringify(newLabels));
	// console.log("contracts: "+JSON.stringify(newContracts));
	// console.log("quotes: "+JSON.stringify(newQuotes));
	// console.log("HireValues: "+JSON.stringify(newHireValues));

	new Chart(barChartX, {
		data: {
			labels: newLabels,
			datasets: [{
				type: "bar",
				label: "Contracts",
				data: newContracts,
				yAxisID: "A"
			},
			{
				type: "bar",
				label: "Quotes",
				data: newQuotes,
				yAxisID: "A"
			},
			{
				type: "line",
				label: "Weekly Hire Value",
				data: newHireValues,
				yAxisID: "B"
			}],
		},
		options: {
			scales: {
				A: {
					type: "linear",
					position: "left",
					beginAtZero: true
				},
				B: {
					type: "linear",
					position: "right",
					beginAtZero: false,
					grid: {
						drawOnChartArea: false
					}
				}
			}
		}
	});
}





// $(function() {
// 	$("#tableTwo").DataTable();
// });