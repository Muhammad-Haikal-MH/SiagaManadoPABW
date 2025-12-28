<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\BpbdDashboardController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Settings\ProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    // USER

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/lapor', [LaporanController::class, 'store']);
    Route::post('/feedback', [FeedbackController::class, 'store']);
    Route::get('/berita', [BeritaController::class, 'indexUser']);

    Route::get('/profile', [ProfileController::class, 'edit']);

    // ADMIN
    Route::middleware('role:admin')->group(function () {
        Route::patch('/admin/laporan/{laporan}/status', [AdminDashboardController::class, 'updateStatus']);
        Route::delete('/admin/laporan/{laporan}', [AdminDashboardController::class, 'destroy']);
        Route::get('/admin/feedback', [FeedbackController::class, 'index']);
        Route::post('/admin/berita', [BeritaController::class, 'store']);
        Route::patch('/admin/berita/{berita}/status', [BeritaController::class, 'updateStatus']);
        Route::delete('/admin/berita/{berita}', [BeritaController::class, 'destroy']);
    });

    // BPBD
    Route::middleware('role:bpbd')->group(function () {
        Route::patch('/bpbd/laporan/{laporan}/status', [BpbdDashboardController::class, 'updateStatus']);
    });

});
