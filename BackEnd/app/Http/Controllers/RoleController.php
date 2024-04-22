<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{
    public function update(Request $request)
    {
        if($request->id === Auth()->user()->id)
        {
            $user = User::find($request->id);
            $user->role_id = 2;
            $user->save();
            return response()->json([
                'user' => $user,
                'message' => 'Worker has been added succesfully'
            ]);
        }
    }
}
