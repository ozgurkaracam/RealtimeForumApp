<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->group(function(){
    Route::resource('notifications',\App\Http\Controllers\NotificationController::class);
    Route::apiResource('questions',\App\Http\Controllers\QuestionController::class);
    Route::apiResource('categories',\App\Http\Controllers\CategoryController::class);
    Route::apiResource('replies',\App\Http\Controllers\ReplyController::class);
    Route::post('logout',[\App\Http\Controllers\AuthController::class,'logout']);
    Route::post('replies/{id}/like',[\App\Http\Controllers\ReplyController::class,'likereply'])->name('likereply');
    Route::post('questions/{id}/like',[\App\Http\Controllers\QuestionController::class,'likequestion'])->name('likequestion');
    Route::get('user',function(){
       return new \App\Http\Resources\UserResource(\Illuminate\Support\Facades\Auth::user());
    });
});

Route::post('/authenticate',[\App\Http\Controllers\AuthController::class,'login'])->name('auth');
Route::post('/register',[\App\Http\Controllers\AuthController::class,'register']);

