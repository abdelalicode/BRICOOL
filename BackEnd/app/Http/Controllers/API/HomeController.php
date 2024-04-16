<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\User;
use App\Models\Worker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getCities()
    {
        return DB::table('cities')->select('id', 'name')->get();
    }

    public function filterOffers(Request $request)
    {
        $cityId = $request->input('city_id');
        $jobId = $request->input('job_id');
        $selectedDate = $request->input('selected_date');

        $offers = Worker::where('city_id', $cityId)
            ->where('job_id', $jobId)
            ->get()
            ->map(function ($worker) use ($selectedDate) {
                $filteredOffers = $worker->workerOffers->filter(function ($offer) use ($selectedDate) {
                    return $selectedDate >= $offer->start_date && $selectedDate <= $offer->end_date;
                });

                if ($filteredOffers->isNotEmpty()) {
                    return [
                        'worker' => $worker,
                        'offers' => $filteredOffers
                    ];
                } else {
                    return null;
                }
            });

        return response()->json($offers);
    }
}
