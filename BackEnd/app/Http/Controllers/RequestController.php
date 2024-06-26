<?php

namespace App\Http\Controllers;

use App\Models\Request as RequestModel;
use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;

class RequestController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(RequestModel::where('status', 1)->with('client')->with('worker')->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'city' => 'required',
            'description' => 'required'
        ]);

        $validated['client_id'] = Auth::user()->id;

        try {
            $jobrequest = RequestModel::create($validated);;
            $success['jobrequest'] =  $jobrequest;
            return $this->sendResponse($success, 'Your job request sent successfully.');
        } catch (QueryException $e) {

            error_log($e->getMessage());
            return $this->sendError('Failed to send job request. ' . $e->getMessage(), [], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $requestModel = RequestModel::findOrFail($id);
        return $requestModel->update(['status' => 0]);
    }

    public function TakeRequest(Request $request)
    {
        $worker_id = Auth::user()->id;

        try {
            $requestModel = RequestModel::findOrFail($request->id);
            if ($requestModel->worker_id === null) {
                $requestModel->update(['worker_id' => $worker_id]);
                return response()->json(['message' => 'The request taken successfully'], 200);
            } else {
                return response()->json(['message' => 'Request already taken by another worker'], 200);
            }
            
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to take request'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
    }
}
