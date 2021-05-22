<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;
    protected $fillable=['body','question_id','user_id'];
    public function likedusers()
    {
        return $this->morphToMany(User::class,'like','likes','like_id','user_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);

    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
    public function scopeOrdered($query)
    {
        return $query->orderBy('created_at', 'DESC')->get();
    }

}
