<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\DonationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/news', [HomeController::class, 'news'])->name('news');
Route::get('/news/{slug}', [HomeController::class, 'newsDetails'])->name('news.details');

Route::get('/donations', [DonationController::class, 'index'])->name('donations');
Route::post('/donations', [DonationController::class, 'store'])->name('donations.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
