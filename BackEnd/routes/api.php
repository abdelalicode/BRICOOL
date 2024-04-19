<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\HomeController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\OfferController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\TransationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    $user = $request->user()->load('role');
    return $user;
});


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);
Route::put('update', [AuthController::class, 'updateProfile']);

Route::resource('job', JobController::class);
Route::resource('request', RequestController::class);
Route::get('/cities', [HomeController::class, 'getCities']);
Route::get('/worker/{id}', [HomeController::class, 'getWorker']);
Route::middleware('auth:sanctum')->get('/client', [HomeController::class, 'getClient']);
Route::post('/offersby', [OfferController::class, 'filterOffers']);
Route::get('/showbycity/{id}', [OfferController::class, 'showByCity']);
Route::get('/showbyjob/{id}', [OfferController::class, 'showByJob']);

Route::put('address', [AuthController::class, 'updateAddress']);
Route::put('phone', [AuthController::class, 'updatePhone']);
