<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OnRent extends Model
{
	use HasFactory;
	protected $table = "on_rent";

	protected $fillable = [
		'gen_date',
		'contracts',
		'quotes',
		'weekly_value',
	];

	protected $cast = [
		"gen_date" => "date"
	];

	public function getFormattedDate()
	{
		return $this->gen_date->format('d-m-y');
	}

	public function onRentLines(): BelongsTo
	{
		return $this->belongsTo(OnRenntlines::class, 'header_id', 'id');
	}
}
