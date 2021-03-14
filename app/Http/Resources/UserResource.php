<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type'=>'user',
            'links'=>[
                'self'=>  '/api/user/'.$this->id
            ],
            'id'=>$this->id,
            'attributes'=>[
                'email'=>$this->email,
                'name'=>$this->name
            ],
            'relationships'=>[
                'questions'=>new QuestionCollection($this->whenLoaded('questions')),
                'replies'=>new ReplyCollection($this->whenLoaded('replies')),
                'likedquestions'=>new LikeCollection($this->whenLoaded('likedquestions')),
                'likedreplies'=>new LikeCollection($this->whenLoaded('likedreplies'))
            ]
        ];
    }
}
