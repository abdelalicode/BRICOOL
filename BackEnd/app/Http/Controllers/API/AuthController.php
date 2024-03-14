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
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

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
            'username' => 'required'
        ]);


        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

       

        $input = $request->all();

        $input['password'] = Hash::make($input['password']);


        $user = User::create($input);

        $worker_role = Role::where('name', 'worker')->first();

        if($worker_role)
        {
            $user->assignRole($worker_role);
        }

        // $success['token'] =  $user->createToken('MyApp')->plainTextToken;
        $success['firstname'] =  $user->firstname;
        return $this->sendResponse($success, 'User register successfully.');
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
