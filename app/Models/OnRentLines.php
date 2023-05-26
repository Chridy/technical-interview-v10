<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class OnRentLines extends Model
{
    use HasFactory;
	protected $table = "on_rent_lines";

	protected $fillable = [
		'account',
		'order_number',
		'rental_start',
		'dispatch_id',
		'order_value'
	];

	public function onRent(): HasOne
	{
		return $this->hasOne(OnRent::class, 'id', 'header_id');
	}
}
