<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Inertia\Inertia;

class FeedbackController extends Controller
{


    public function store(Request $request)
    {
        $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'deskripsi' => 'required|string',
        ]);

        Feedback::create([
            'user_id' => auth()->id(),
            'fullName' => $request->fullName,
            'email' => $request->email,
            'deskripsi' => $request->deskripsi,
        ]);

        return back()->with('success', 'Feedback berhasil dikirim');
    }

    public function index()
    {
        return Inertia::render('admin/feedback', [
            'feedbacks' => Feedback::with('user')->latest()->get(),
        ]);
    }
}
