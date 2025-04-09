<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateAdminUser extends Command
{
    protected $signature = 'admin:create';
    protected $description = 'Create a new admin user';

    public function handle()
    {
        $name = $this->ask('Enter admin name');
        $email = $this->ask('Enter admin email');
        $password = $this->secret('Enter admin password');

        // Create the user
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => $password,
        ]);

        $this->info('Admin user created successfully!');
        $this->table(
            ['Name', 'Email'],
            [[$user->name, $user->email]]
        );
    }
}
