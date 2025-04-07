<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = ["id"];

    public function category(){
        return $this->hasMany(related: Post::class);
    }

}
