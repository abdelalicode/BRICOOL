<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\HomeController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\OfferController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\RoleController;
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
Route::get('authworker/', [AuthController::class, 'getAuthWorker']);
Route::put('update', [AuthController::class, 'updateProfile'])->middleware(['auth:sanctum']);


//Needs ADmin Middleware
// Route::resource('job', JobController::class)->middleware('can:isAdmin');
Route::get('/job', [JobController::class, 'index']);
Route::middleware('can:isAdmin')->resource('job', JobController::class)
    ->except(['index']);
Route::get('stats', [OfferController::class, 'getCityOfferStatistics'])->middleware('can:isAdmin');

Route::resource('request', RequestController::class);
Route::put('takerequest', [RequestController::class, 'TakeRequest'])->middleware(['auth:sanctum','isWorker']);

Route::resource('review', ReviewController::class)->middleware(['auth:sanctum']);
Route::put('/user/{id}', [AuthController::class, 'updateWorkerProfile'])->middleware(['auth:sanctum','isWorker']);

Route::get('/cities', [HomeController::class, 'getCities']);
Route::get('/worker/{id}', [HomeController::class, 'getWorker']);
Route::get('/clienttoworker/{id}', [HomeController::class, 'getClienttoWorker']);
Route::get('/workers', [HomeController::class, 'getAllWorkers']);
Route::middleware('auth:sanctum')->get('/client', [HomeController::class, 'getClient']);

Route::resource('offer', OfferController::class)->middleware(['auth:sanctum','isWorker']);

Route::post('/offersby', [OfferController::class, 'filterOffers']);
Route::put('/enrolloffer/{id}', [OfferController::class, 'enroll'])->middleware(['auth:sanctum']);
Route::get('/showbycity/{id}', [OfferController::class, 'showByCity']);
Route::get('/showbyjob/{id}', [OfferController::class, 'showByJob']);
Route::get('/workeroffers', [OfferController::class, 'WorkerOffers']);

Route::put('address', [AuthController::class, 'updateAddress'])->middleware(['auth:sanctum']);
Route::put('phone', [AuthController::class, 'updatePhone'])->middleware(['auth:sanctum']);

Route::post('updateprofileavatar', [HomeController::class, 'updateProfileAvatar'])->middleware(['auth:sanctum','isWorker']);

