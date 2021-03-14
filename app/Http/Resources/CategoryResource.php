<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'type'=>'question',
            'links'=>[
                'self'=>  '/api/categories/'.$this->id
            ],
            'id'=>$this->id,
            'attributes'=>[
                'body'=>$this->name,
                'slug'=>$this->slug
            ],
            'relationships'=>[
                'questions'=>new QuestionCollection($this->whenLoaded('questions')),
            ]
        ];
    }
}
