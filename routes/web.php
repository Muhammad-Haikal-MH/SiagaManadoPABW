<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\BpbdDashboardController;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('homepage', function () {
    return Inertia::render('homepage');
})->name('homepage');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('berita', function () {
        return Inertia::render('berita');
    })->name('berita');

    Route::get('/mitigasi', function () {
        return Inertia::render('mitigasi/index');
    });

    Route::get('/mitigasi/{slug}', function ($slug) {
        return Inertia::render('mitigasi/detail', [
            'slug' => $slug
        ]);
    });

    Route::post('/lapor', [LaporanController::class, 'store'])->name('lapor.store');



});

// admin bae
Route::middleware(['auth', 'role:admin'])->group(function () {

    Route::get('/admin/homepage', [AdminDashboardController::class, 'index']);
    Route::patch('/admin/laporan/{laporan}/status', [AdminDashboardController::class, 'updateStatus']);
    Route::delete('/admin/laporan/{laporan}', [AdminDashboardController::class, 'destroy']);

});


// bpbd bae
Route::middleware(['auth', 'role:bpbd'])->group(function () {
    // Route::get('/bpbd/homepage', function () {
    //     return Inertia::render('bpbd/index');
    // })->name('bpbd.index');

    Route::get('/bpbd/homepage', [BpbdDashboardController::class, 'index']);
    Route::patch('/bpbd/laporan/{laporan}/status', [BpbdDashboardController::class, 'updateStatus']);

});



require __DIR__.'/settings.php';
