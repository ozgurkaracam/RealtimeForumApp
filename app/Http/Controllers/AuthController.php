<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
                ]);
            }

            $user=Auth::user();
            $tokenResult=$user->createToken('authToken')->plainTextToken;
            return response()->json([
                'status_code' => 200,
                'access_token' => $tokenResult,
                'token_type' => 'Bearer',
            ]);
        }catch ( \Exception $e){
            return response()->json([
                'status_code'=>500,
                'message'=>'No Auth',
                'error'=>$e->getMessage()
            ]);
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

    public function register(Request  $request)
    {
        $credentials=request(['name','email','password']);
        $credentials['password']=Hash::make($request->get('password'));
        User::create($credentials);
        return $this->login($request);
    }
}
