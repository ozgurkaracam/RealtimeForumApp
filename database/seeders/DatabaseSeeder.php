<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Question;
use App\Models\Reply;
use App\Models\User;
use Database\Factories\ReplyFactory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        User::factory()->count(8)->create();
        Category::factory()->count(rand(3, 8))->create();
        for ($i = 0; $i < 50; $i++) {
            Question::factory([
                'category_id' => Category::inRandomOrder()->first(),
                'user_id' => User::inRandomOrder()->first()
            ])->create();
        }
        for($i=0;$i<1000;$i++){
            Reply::factory([
                'question_id' => Question::inRandomOrder()->first(),
                'user_id' => User::inRandomOrder()->first()
            ])->create();
        }


    }
}
