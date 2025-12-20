<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\BpbdDashboardController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\BeritaController;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('homepage');



Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/berita', [BeritaController::class, 'indexUser']);

    // Route::get('berita', function () {
    //     return Inertia::render('berita');
    // })->name('berita');

    Route::get('/mitigasi', function () {
        return Inertia::render('mitigasi/index');
    });

    Route::get('/mitigasi/{slug}', function ($slug) {
        return Inertia::render('mitigasi/detail', [
            'slug' => $slug
        ]);
    });

    Route::post('/lapor', [LaporanController::class, 'store'])->name('lapor.store');

    Route::post('/feedback', [FeedbackController::class, 'store']);


});

// admin bae
Route::middleware(['auth', 'role:admin'])->group(function () {

    Route::get('/admin/homepage', [AdminDashboardController::class, 'index'])->name('admin.homepage');
    Route::patch('/admin/laporan/{laporan}/status', [AdminDashboardController::class, 'updateStatus']);
    Route::delete('/admin/laporan/{laporan}', [AdminDashboardController::class, 'destroy']);


    Route::get('/admin/feedback', [FeedbackController::class, 'index']);


    Route::get('/admin/berita', [BeritaController::class, 'index']);
    Route::post('/berita', [BeritaController::class, 'store']);
    Route::patch('/berita/{berita}/status', [BeritaController::class, 'updateStatus']);
    Route::delete('/berita/{berita}', [BeritaController::class, 'destroy']);

});


// bpbd bae
Route::middleware(['auth', 'role:bpbd'])->group(function () {

    Route::get('/bpbd/homepage', [BpbdDashboardController::class, 'index'])->name('bpbd.homepage');
    Route::patch('/bpbd/laporan/{laporan}/status', [BpbdDashboardController::class, 'updateStatus']);

});



require __DIR__.'/settings.php';
