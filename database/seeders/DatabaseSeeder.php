<?php

namespace Database\Seeders;

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
        // \App\Models\User::factory(10)->create();
        User::factory()->count(5)
            ->has(Question::factory()->count(rand(3,15))
                ->has(Reply::factory()->count(rand(3,15))
                    )
                )
            ->create();
    }
}
