<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DonationController extends Controller
{
    public function index()
    {
        return Inertia::render('Donations/Index', [
            'donations' => Donation::where('approve', true)
                ->latest()
                ->get(),
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'nullable|string|max:255',
            'link' => 'required|url|max:255',
        ]);

        Donation::create([
            'name' => $validated['name'],
            'link' => $validated['link'],
            'approve' => false,
        ]);

        return redirect()->back()->with('success', 'Donation link submitted successfully! It will be visible after approval.');
    }
}
