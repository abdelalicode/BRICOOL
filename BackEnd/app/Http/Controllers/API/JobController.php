<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreJobRequest;
use App\Http\Requests\UpdateJobRequest;
use App\Models\Job;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobs = Job::select('id','type')->get();
        return response()->json([
            'success' => true,
            'data' => $jobs,
            'message' => 'Jobs retrieved successfully.'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJobRequest $request)
    {
        $job = Job::create($request->validated());
        return response()->json(['message' => 'Job created successfully', 'job' => $job], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Job $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJobRequest $request, Job $job)
    {

        
        try {
            $job->update($request->validated());
            return response()->json(['message' => 'Job updated successfully'], 200);
    
        } catch (QueryException $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Job $job)
    {
        try {
            $job->delete();
            return response()->json(['message' => 'Job deleted successfully'], 200);
    
        } catch (QueryException $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
