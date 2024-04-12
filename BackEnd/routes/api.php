<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



/*** ================================ Authentication ==========================*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(AuthController::class)->group(function(){
    Route::post('register' , 'register');
    Route::post('login' , 'login');
    Route::post('setparticipant' , 'setParticipant');
});

Route::middleware('auth:sanctum')->group(function(){
    Route::resource('user', UserController::class);
    Route::post('logout' , [AuthController::class ,'logout']);
});