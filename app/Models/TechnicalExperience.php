<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TechnicalExperience extends Model
{
    use HasFactory;

    protected $fillable = [
        'app_id', 'technology_name', 'technology_value'
    ];
}
