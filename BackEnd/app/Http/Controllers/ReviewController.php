<?php

namespace App\Http\Controllers;

use App\Http\Controllers\API\BaseController;
use App\Models\Review;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReviewController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'stars' => 'required',
            'content' => 'required',
            'worker_id' => 'required'
        ]);

        $validated['client_id'] = Auth::user()->id;
        
        try {
            $review = Review::create($validated);;
            $success['review'] =  $review;
            return $this->sendResponse($success, 'Your review sent successfully.');
        } catch (QueryException $e) {

            error_log($e->getMessage());
            return $this->sendError('Failed to send job request. ' . $e->getMessage(), [], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        //
    }
}
