<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OnRent;
use App\Models\OnRentLines;
use DateTime;

class TableController extends Controller
{
	public function index() {
		$test = "testing1";
		$startDate = new DateTime("now");
		$startDate = $startDate->modify("-3 weeks");
		$rentAll = OnRent::selectRaw("DATE_FORMAT(gen_date, '%d/%m/%Y') as 'gen_date', contracts, quotes, weekly_value")
						->where('gen_date', '>=', $startDate)
						->orderby('gen_date')
						->get();

		// $rentAll = OnRent::all();
		$rentLinesAll = OnRentLines::all();

		return view("tables", compact("test", "startDate", "rentAll", "rentLinesAll"));
	}
}
