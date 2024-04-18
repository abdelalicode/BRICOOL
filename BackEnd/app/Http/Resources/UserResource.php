<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = [
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'token' => $this->createToken("Token")->plainTextToken,
            'roles' => $this->role->pluck('name') ?? [],
            'phone' => $this->phone,
            'username' => $this->username,
            'address' => $this->address,
            'available' => $this->available,
            'job_id' => $this->job_id,
            'city_id' => $this->city_id
        ];

        if ($this->isClient()) {
            $this->load('client.requests', 'client.reviews');
            $data['requests'] = $this->client->requests;
            $data['reviews'] = $this->client->reviews;
        }

        return $data;
    }
}
