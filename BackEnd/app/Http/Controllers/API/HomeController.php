<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Client;
use App\Models\User;
use App\Models\Worker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getCities()
    {
        return DB::table('cities')->select('id', 'name')->get();
    }

    public function getWorker($id)
    {
        return Worker::where('id', $id)
            ->with('job')->with('city')->with('reviewsAsWorker.client')->with('workerOffers')->first();
    }

    public function getClienttoWorker($id)
    {
        return Client::where('id', $id)->first();
    }

    public function getClient()
    {
        return Client::where('id', Auth()->user()->id)
            ->with('reviews')->with('requests')->first();
    }



    public function getAllWorkers()
    {
        $workers = Worker::orderBy('firstname', 'asc')->where('role_id', 2)->with('job')->get();

        foreach ($workers as $worker) {
            $profileImageUrl = $worker->getFirstMediaUrl('avatars');
            $worker->profile_image_url = $profileImageUrl;
        }

        return $workers;
    }


    public function updateProfileAvatar(Request $request)
    {
        $worker = Worker::find($request->id);
        $worker->addMediaFromRequest('image')->toMediaCollection('avatars');
        return response()->json(['message' => 'Avatar updated successfully']);
    }
}
