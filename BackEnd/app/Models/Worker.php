<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Worker extends User
{
    use HasFactory;

    protected $fillable = [
        'available',
    ];

    public function job()
    {
        return $this->belongsTo(Job::class)->withDefault();
    }

    public function city()
    {
        return $this->belongsTo(City::class)->withDefault();
    }

    public function workerOffers()
    {
        return $this->hasMany(Offer::class , 'worker_id');
    }


    public function workerRequests()
    {
        return $this->hasMany(Request::class, 'worker_id');
    }

    public function reviewsAsWorker()
    {
        return $this->hasMany(Review::class, 'worker_id');
    }
}
