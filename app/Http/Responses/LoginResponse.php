<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        $user = $request->user();

        return match ($user->role) {
            'admin' => redirect()->route('admin.homepage'),
            'bpbd'  => redirect()->route('bpbd.homepage'),
            default => redirect()->route('homepage'),
        };
    }
}
