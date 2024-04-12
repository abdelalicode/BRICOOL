<?php

use App\Http\Controllers\API\AuthController;
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
    $user = $request->user()->load('wallet', 'role');
    return $user;
});


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);
Route::put('update', [AuthController::class, 'updateProfile']);

Route::middleware('auth:sanctum')->post('transfer', [TransationController::class, 'transfer']);
Route::middleware('auth:sanctum')->get('senttrans', [TransationController::class, 'getSTransactions']);
Route::middleware('auth:sanctum')->get('receivedtrans', [TransationController::class, 'getRTransactions']);