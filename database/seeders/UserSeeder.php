<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         User::create([
            'name' => 'Admin',
            'email' => 'siagamanado@gmail.com',
            'password' => Hash::make('siagamanado'),
            'role' => 'admin',
            'email_verified_at' => now(),
        ]);

        // BPBD
        User::create([
            'name' => 'Petugas BPBD',
            'email' => 'bpbdmanado@gmail.com',
            'password' => Hash::make('bpbdmanado'),
            'role' => 'bpbd',
            'email_verified_at' => now(),
        ]);

        // USER BIASA
        User::create([
            'name' => 'ucup',
            'email' => 'ucup@gmail.com',
            'password' => Hash::make('ucup1234'),
            'role' => 'user',
            'email_verified_at' => now(),
        ]);
    }
}
