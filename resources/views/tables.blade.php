<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Technical test - Chris Kelly</title>

		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.bunny.net">
		<link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
		<link rel="stylesheet" href="../resources/css/app.css">
		<link rel="stylesheet" href="../resources/css/datatables.min.css">
		<script type="text/javascript" src="../resources/js/jquery.min.js"></script>
		<script type="text/javascript" src="../resources/js/datatables.min.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
		<script type="text/javascript" src="../resources/js/app.js"></script>
	</head>

	<body>
		<h1>Chris Kelly Technical Test</h1>

		<h2>Part 1</h2>
		<!-- Part 1: Generate Chart
		Generate a mixed bar/line chart which clearly shows:
		Required:
			How many contracts and quotes were generated each day within the last 3 weeks. (bar)
			The weekly hire value (line)
			Show dates in dd/mm/YYYY format on the X axis;
			Show appropriate Y Axis for each bar/line of the chart.

		Bonus:
			Calculate and show as a line, the moving average of weekly hire.
		-->
		<div>
			<canvas id="barOne"></canvas>
			<canvas id="lineOne"></canvas>
		</div>
		<script>
			var rentAll = {!! json_encode($rentAll->toArray()) !!};
			createCharts(rentAll);
		</script>
		<!-- <p>{{ var_dump($startDate) }}</p> -->
		<!-- <p>{{ $rentAll }}</p> -->




		<table id="tableOne" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>Date</th>
					<th>Contracts</th>
					<th>Quotes</th>
					<th>Weekly Hire Value</th>
				</tr>
			</thead>
			<tbody>
				@foreach($rentAll as $key => $val)
					<tr>
						<td>{{ $val->gen_date }}</td>
						<td>{{ $val->contracts }}</td>
						<td>{{ $val->quotes }}</td>
						<td>{{ $val->weekly_value }}</td>
					</tr>
				@endforeach
			</tbody>
		</table>

		<h2>Part 2</h2>
		<!-- Part 2: Generate tabular data
		Required
			Generate a table under the chart showing the same data in tabular format.
		Bonus
			Provide the ability to view the contracts (onrent_lines table) for each date in tabular format via a modal / popup.
			Once finished, commit your work and push
		-->
		<table id="tableTwo" class="table table-striped table-bordered table-hover">
			<thead>
				<tr>
					<th>test</th>
				</tr>
			</thead>
			<tbody>
				@foreach($rentLinesAll as $key => $val)
					<tr>
						<td>{{ $val }}</td>
					</tr>
				@endforeach
			</tbody>
		</table>

	</body>
</html>