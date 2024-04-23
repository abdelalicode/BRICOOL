<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use App\Models\Worker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'hourly_rate' => 'required|numeric|min:1',
        ]);

        $validated['worker_id'] = Auth::user()->id;

        $offer = Offer::create($validated);
    
        return response()->json(['offer' => $offer], 200);
    }

    public function WorkerOffers()
    {
        return  Offer::where('worker_id', Auth::user()->id)->with('client')->get();
    }

    /**
     * Display the specified resource.
     */
    public function show(Offer $offer)
    {
        //
    }



    public function showByCity($id)
    {
        $offers = Offer::whereHas('worker', function ($query) use ($id) {
            $query->where('city_id', $id);
        })->with('worker')->get();
    
        return response()->json($offers);
    }

    public function showByJob($id)
    {
        $offers = Offer::whereHas('worker', function ($query) use ($id) {
            $query->where('job_id', $id);
        })->with('worker')->get();
    
        return response()->json($offers);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Offer $offer)
    {
        return $offer->update(['cancelled' => 1]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offer $offer)
    {
        //
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
