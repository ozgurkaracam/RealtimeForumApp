<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try{
            $request->validate([
                'email'=>'required',
                'password'=>'required'
            ]);
            $credential=request(['email','password']);
            if(!Auth::guard('web')->attempt($credential)){
                return response()->json([
                    'status_code'=>500,
                    'message'=>'No Authentication'
                ],401);
            }

            $user=Auth::user();
            $tokenResult=$user->createToken('authToken')->plainTextToken;
            return response()->json([
                'status_code' => 200,
                'access_token' => $tokenResult,
                'token_type' => 'Bearer',
                'data'=>new UserResource(Auth::user())
            ]);
        }catch ( \Exception $e){
            return response()->json([
                'status_code'=>500,
                'message'=>'No Auth',
                'error'=>$e->getMessage()
            ],404);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->where('id',$request->user()->currentAccessToken()->id)->delete();
        return response()->json([
            'status_code'=>200,
            'message'=>'You are logged out!'
        ]);
    }

    public function register(SignupRequest $request)
    {
        $credentials=request(['name','email','password']);
        $credentials['password']=Hash::make($request->get('password'));
        User::create($credentials);
        return $this->login($request);
    }
}
