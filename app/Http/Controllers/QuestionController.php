<?php

namespace App\Http\Controllers;

use App\Events\LikeEvent;
use App\Events\NotificationCreated;
use App\Events\QuestionCreated;
use App\Http\Resources\QuestionCollection;
use App\Http\Resources\QuestionResource;
use App\Http\Resources\UserResource;
use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Psy\Util\Str;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        event(new NotificationCreated(Auth::user()));
        return new QuestionCollection(Question::withCount(['replies','likedusers'])->orderBy('id','DESC')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
            $question=Auth::user()->questions()->create(array_merge($request->all(),['slug'=>\Illuminate\Support\Str::slug($request->title)]));
            event(new QuestionCreated(new QuestionResource($question->withCount(['replies','likedusers'])->orderBy('id','DESC')->first())));
            return new QuestionResource($question);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $question=Question::where('slug',$id)->withCount('replies')->with(['replies'=>function($query){
            $query->orderBy('id','DESC');
        },'likedusers','user','category'])->first();
        return new QuestionResource($question);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        $this->authorize('delete',$question);
        $question->update($request->all());
        return new QuestionResource($question);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->authorize('delete',Question::findOrFail($id));
        Question::findOrFail($id)->delete();
        return new QuestionCollection(Question::all());
    }

    public function likequestion($id)
    {
//        dd('ss');
        $question=Question::find($id);
//        return response()->json(['Merhaba'=>$question]);
        Auth::user()->likedquestions()->toggle($question);
        event(new LikeEvent(new QuestionResource($question),'question'));
        return new QuestionResource($question);
    }
}
