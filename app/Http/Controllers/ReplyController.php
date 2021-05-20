<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReplyCollection;
use App\Http\Resources\ReplyResource;
use App\Models\Question;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReplyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new ReplyCollection(Reply::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $reply=Reply::create([
            'user_id'=>Auth::user()->id,
            'question_id'=>$request->question_id,
            'body'=>$request->body
        ]);
        return new ReplyResource($reply);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ReplyResource(Reply::where('id',$id)->with(['likedusers','question'])->firstOrFail());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $reply=Reply::find($id);
        $reply->delete();
        return response()->json(['status_code'=>400,'message'=>'successfully!']);
    }

    public function likereply($id)
    {
        Auth::user()->likedreplies()->toggle(Reply::findOrFail($id));
        return new ReplyResource(Reply::where('id',$id)->with(['likedusers','question'])->firstOrFail());
    }
}
