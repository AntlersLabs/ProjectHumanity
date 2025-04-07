<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $breakings = Post::where('breaking', true)->orderBy('created_at','desc')->take(1)->get();
       $topstories = Post::with('category')->orderBy('created_at','desc')->take(5)->inRandomOrder()->get();
       $featureds = Post::where('published', true && 'breaking', true)->with('category')->orderBy('created_at','desc')->take(2)->get();
       $latest = Post::with('category')->orderBy('created_at','desc')->take(20)->get();


       return Inertia::render('Home',[
            'breakings' => $breakings,
            'topstories' => $topstories,
            'featureds' => $featureds,
            'latest' => $latest,
        ]);
    }
}
