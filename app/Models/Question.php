<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Question extends Model
{
    use HasFactory;
    protected $fillable=['title','body','slug','category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likedusers()
    {
        return $this->morphToMany(User::class,'like','likes','like_id','user_id');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['slug']=Str::slug($value);
        $this->attributes['title']=$value;
    }
}
