/**
 * Initialise the data chart
 *
 * @param {array} rentAll Data from on_rent
 */
function createCharts(rentAll) {
	const barChartX = document.getElementById("chartDisplay");
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

/**
 * Initialise the datatable
 */
$(function() {
	$("#tableOne").DataTable();
});

/**
 * Get the contracts to open the modal
 *
 * @param {int} contractId Contract ID to retrieve data from
 */
function openModal(contractId) {
	//::: This is failing as somewhere along the line it's being converted to a GET, which isn't supported for this request
	//::: as the route is a POST. Could change both to GET methods, but that defeats the point of posting private data like
	//::: the header_id (I know it's not the most secure as it's in the button query, but I tried)
	$.ajax({
		url: "contract/",
		method: "POST",
		data: contractId
	}).done(function(data) {
		populateModal(data);
	}).fail(function(error) {
		console.log("Failed to get contract data:");
		console.log(error.responseText);
	});
}

/**
 * Populate contract modal and open it
 *
 * @param {array} data The list of contracts from the selected row
 */
function populateModal(data) {
	var html = "";
	data.forEach(e => {
		html += "<tr>";
		html += "<td>"+e.account+"</td>";
		html += "<td>"+e.order-number+"</td>";
		html += "<td>"+e.rental_start+"</td>";
		html += "<td>"+e.dispatch_id+"</td>";
		html += "<td>"+e.order_value+"</td>";
		html += "</tr>";
	});

	// $("#modalTable").DataTable().destroy();
	$("#modalTable tbody").html(html);
	$("#modal-outer").addClass("show");
	// $("#modalTable").DataTable();
}

/**
 * Close the contract modal
 */
function closeModal() {
	$("#modal-outer").removeClass("show");
}