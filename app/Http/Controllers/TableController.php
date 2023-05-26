<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OnRent;
use App\Models\OnRentLines;
use DateTime;

class TableController extends Controller
{
	public function index() {
		$startDate = new DateTime("now");
		$startDate = $startDate->modify("-3 weeks");
		$rentAll = OnRent::selectRaw("id, DATE_FORMAT(gen_date, '%d/%m/%Y') as 'gen_date', contracts, quotes, weekly_value")
						->where('gen_date', '>=', $startDate)
						->orderby('gen_date')
						->get();

		return view("tables", compact("startDate", "rentAll"));
	}

	public function getContracts(Request $contractId) {
		$rentLinesAll = OnRentLines::selectRaw("id, header_id, account, order-number, DATE_FORMAT(rental_start, '%d/%m/%Y') as 'rental_start', dispatch_id, order_value")
								->where('header_id', '=', $contractId)
								->orderby('rental_start')
								->get();

		return json_encode($rentLinesAll);
	}
}
