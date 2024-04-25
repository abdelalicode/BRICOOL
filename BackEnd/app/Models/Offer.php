<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Offer extends Model implements HasMedia
{
    use HasFactory , InteractsWithMedia;

    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
        'hourly_rate',
        'client_id',
        'worker_id',
        'cancelled'
    ];

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id')->withDefault([
            'name' => 'No Client enrolled',
        ]);
    }

    public function worker()
    {
        return $this->belongsTo(User::class, 'worker_id');
    }
}
