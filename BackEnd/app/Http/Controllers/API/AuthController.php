<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Session;
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
            'firstname' => 'required|string|min:4|max:12',
            'lastname' => 'required|string|min:4|max:12',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $validatedUser = $validator->validated();
        Session::put('validateduser', $validatedUser);

        return response()->json(['validateduser' => $validatedUser], 200);
    }

    public function setOrganisator()
    {
        $user = Session::get('validateduser');
        $randomStr = Str::random(6);

        $user['role_id'] = 2;
        $user['password'] = Hash::make($user['password']);
        $user['username'] = strtolower($user['firstname'] . $randomStr);

        return $user;

        User::create($user);

        Session::forget('validateduser');
        return response()->json(['message' => 'Organisator created successfully'], 201);
    }

    public function setParticipant(Request $request)
    {

        $userData = $request->only(['firstname', 'lastname', 'email', 'password']);
        
        // $user = Session::get('validateduser');
        $randomStr = Str::random(6);

        $user['role_id'] = 3;
        $user['username'] = strtolower($user['lastname'] . $randomStr);

        return $user;

        User::create($user);

        Session::forget('validateduser');
        return response()->json(['message' => 'Participant created successfully'], 201);
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
            // $user = Auth::user();
            // $success['token'] =  $user->createToken('MyApp')->plainTextToken;
            // $success['user'] =  $user;
            // return $this->sendResponse($success, 'User login successfully.');
        } else {
            // return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
            return new UserResource(auth()->user());
        }
    }

    public function logout()
    {
        if (auth()->check()) {
            $user = auth()->user();

            $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();


            return $this->sendResponse([], 'User logout successfully.');
        } else {
            return $this->sendError('Unauthenticated.', ['error' => 'Unauthenticated']);
        }
    }
}
