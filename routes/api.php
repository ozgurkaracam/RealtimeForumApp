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

Route::apiResource('questions',\App\Http\Controllers\QuestionController::class);
Route::apiResource('categories',\App\Http\Controllers\CategoryController::class);

Route::get('/users',function(){
   return new \App\Http\Resources\UserCollection(\App\Models\User::with(['questions','likedquestions'])->get());
//    return new \App\Http\Resources\QuestionCollection(\App\Models\Question::with('likedusers')->get());
});
