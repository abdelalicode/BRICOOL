<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use App\Http\Resources\UserResource;
use App\Models\Client;
use App\Models\User;
use App\Models\Worker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Illuminate\Support\Str;



class AuthController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */

    /** get all users */
    public function index()
    {
        $users = User::all();
        return $this->sendResponse($users, 'Displaying all users data');
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $randomStr = Str::random(4);
        $input['username'] = strtolower($input['firstname'] . $randomStr);

        try {
            $user = User::create($input);
            $success['user'] =  $user;
            return $this->sendResponse($success, 'User registered successfully.');
        } catch (QueryException $e) {

            error_log($e->getMessage());
            return $this->sendError('Failed to register user. ' . $e->getMessage(), [], 500);
        }
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            $user = User::where('email', $request->email)->first();

            if (!$user) {
                return $this->sendError('Email not found.', ['error' => 'Email not found'], 401);
            } else {
                return $this->sendError('Incorrect password.', ['error' => 'Incorrect password'], 401);
            }
        } else {
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->plainTextToken;
            $success['user'] =  $user;

            return $this->sendResponse($success, 'User logged in successfully.');
        }
    }

    public function updateAddress(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required',
            'address' => 'required'
        ]);

        if ($validated['id'] === Auth::user()->id) {
            $user = Client::find($validated['id']);
            $user->update($validated);
        }
        return $this->sendResponse($user, 'Address updated successfully.');
    }

    public function updatePhone(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required',
            'phone' => 'required'
        ]);

        if ($validated['id'] === Auth::user()->id) {
            $user = Client::find($validated['id']);
            $user->update($validated);
        }
        return $this->sendResponse($user, 'Phone updated successfully.');
    }

    public function updateProfile(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input = $request->only('firstname', 'lastname', 'email');

        try {
            $user = User::find(Auth::id());
            $user->update($input);

            if ($request->filled('password')) {
                $user->password = Hash::make($request->password);
            }

            $user->save();

            return $this->sendResponse($user, 'Profile updated successfully.');
        } catch (\Exception $e) {
            if (Str::contains($e->getMessage(), 'Duplicate entry')) {
                return $this->sendError('Email already taken.', [], 400);
            }
            return $this->sendError('Failed to update profile.', [], 500);
        }
    }

    public function logout(Request $request)
    {
        $user = auth()->user();
        // $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        $user->tokens()->delete();
        return $this->sendResponse([], 'User logout successfully.');
    }

    public function getAuthWorker()
    {
        $worker =  Worker::where('id', Auth::user()->id)->with('job')->with('city')->first();

        if ($worker) {
            $profileImageUrl = $worker->getFirstMediaUrl('avatars');
            $worker->profile_image_url = $profileImageUrl;
        }

        return $worker;
    }

    public function updateWorkerProfile(Request $request, $id)
    {
        try {
            $user = Worker::find($id);

            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }

            $user->update([
                'city_id' => $request->city_id,
                'job_id' => $request->job_id,
            ]);

            return response()->json([
                'message' => 'User profile updated successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while updating user profile',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    
}
