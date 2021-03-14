<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
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
                'self'=>  '/api/replies/'.$this->id
            ],
            'id'=>$this->id,
            'attributes'=>[
                'body'=>$this->body,
            ],
            'relationships'=>[
                'questions'=>new QuestionCollection($this->whenLoaded('questions')),
                'user'=>new UserResource($this->user),
                'likedusers'=>new UserCollection($this->whenLoaded('likedusers'))
            ]
        ];
    }
}
