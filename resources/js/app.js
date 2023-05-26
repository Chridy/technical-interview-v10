
function createCharts(rentAll) {
	const barChartX = document.getElementById("barOne");
	console.log(rentAll);

	var newLabels = [];
	var newContracts = [];
	var newQuotes = [];
	var newHireValues = [];
	rentAll.forEach(e => {
		newLabels.push(e.gen_date);
		newContracts.push(e.contracts);
		newQuotes.push(e.quotes);
		newHireValues.push(e.weekly_value);
	});

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





$(function() {
	$("#tableOne").DataTable();
});