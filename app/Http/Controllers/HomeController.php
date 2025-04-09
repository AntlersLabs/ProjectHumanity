<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
        $breakings = Post::where('breaking', true)->orderBy('created_at','desc')->take(1)->get();
       $topstories = Post::with('category')->orderBy('created_at','desc')->take(5)->inRandomOrder()->get();
       $featureds = Post::where('published', true)->where('breaking', true)->with('category')->orderBy('created_at','desc')->take(2)->get();
       $latest = Post::with('category')->orderBy('created_at','desc')->take(20)->get();


       return Inertia::render('Home',[
            'breakings' => $breakings,
            'topstories' => $topstories,
            'featureds' => $featureds,
            'latest' => $latest,
        ]);
    }
    public function news(Request $request){
        $query = Post::with('category');

        // Apply search filter
        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('summary', 'like', "%{$search}%");
            });
        }

        // Apply category filter
        if ($request->filled('categories')) {
            $categories = is_array($request->input('categories')) 
                ? $request->input('categories') 
                : explode(',', $request->input('categories'));
            
            if (!empty($categories)) {
                $query->whereIn('category_id', $categories);
            }
        }

        // Apply date filters
        if ($request->filled('dateFrom')) {
            $query->whereDate('created_at', '>=', $request->input('dateFrom'));
        }
        if ($request->filled('dateTo')) {
            $query->whereDate('created_at', '<=', $request->input('dateTo'));
        }

        // Apply sorting
        $sort = $request->input('sort', 'latest');
        if ($sort === 'oldest') {
            $query->orderBy('created_at', 'asc');
        } else {
            $query->orderBy('created_at', 'desc');
        }

        // Add pagination
        $perPage = $request->input('per_page', 10);
        $news = $query->paginate($perPage)->withQueryString();
        
        $categories = Category::orderBy('created_at','desc')->get();
        
        return Inertia::render('News/Index',[
            'news' => $news,
            'categories' => $categories
        ]);
    }

    public function newsDetails(string $slug)
    {
        $article = Post::with('category')
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('News/Details', [
            'article' => $article
        ]);
    }
}
