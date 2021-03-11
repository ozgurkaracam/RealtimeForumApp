<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Question;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class QuestionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Question::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title=$this->faker->sentence." ?";
        $slug=Str::slug($title);
        return [
            'user_id'=>User::factory(),
            'category_id'=>Category::factory(),
            'title'=>$title,
            'slug'=>$slug,
            'body'=>$this->faker->paragraph
        ];
    }
}
