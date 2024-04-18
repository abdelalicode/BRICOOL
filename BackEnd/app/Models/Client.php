<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends User
{
    use HasFactory;

    protected $table = 'users';

    protected $fillable = [
        'phone',
        'address',
    ];

    
 
    public function requests()
    {
        return $this->hasMany(Request::class, 'client_id');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class, 'client_id');
    }
}
