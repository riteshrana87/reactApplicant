<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KnownLanguages extends Model
{
    use HasFactory;

    protected $fillable = [
        'app_id', 'language_name', 'read', 'write','speak'
    ];
}
