// How many contracts and quotes were generated each day within the last 3 weeks. (bar)
// 			The weekly hire value (line)
// 			Show dates in dd/mm/YYYY format on the X axis;
// 			Show appropriate Y Axis for each bar/line of the chart.


function createCharts(rentAll) {
	const ctx = document.getElementById("barOne");

	var newLabels = [];
	var newDatasets = [];
	rentAll.forEach(e => {
		newLabels.push(e.gen_date);
		var dataset = {
			label: "Contracts",
			data: [e.contracts]
		};
		newDatasets.push(dataset);
	});

	new Chart(ctx, {
		type: "bar",
		data: {
			labels: newLabels,
			datasets: newDatasets
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
}





// $(function() {
// 	$("#tableTwo").DataTable();
// });