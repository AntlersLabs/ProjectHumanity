<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Post extends Model
{
    protected $guarded = ["id"];

    protected $appends = ['image_url'];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function getImageUrlAttribute()
    {
        if (!$this->image) {
            return asset('placeholder.svg');
        }

        // Check if the image is a full URL
        if (filter_var($this->image, FILTER_VALIDATE_URL)) {
            return $this->image;
        }

        // If it's a storage path, generate the full URL
        return Storage::disk('public')->url($this->image);
    }
}
