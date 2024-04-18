<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'city',
        'description',
        'status',
        'client_id',
        'worker_id'
    ];


    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function worker()
    {
        return $this->belongsTo(User::class, 'worker_id')->withDefault([
            'name' => 'No Worker has accepted',
            'job' => 'Unknown',
        ]);
    }
}
