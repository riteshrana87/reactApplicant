<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\EducationDetail;
use App\Models\TechnicalExperience;
use App\Models\KnownLanguages;
use App\Models\WorkExperience;
class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'fullName', 'birthDate', 'email', 'gender', 'address', 'houseNumber', 'zipcode', 'preferred_location', 'expected_ctc', 'current_ctc', 'notice_period'
    ];

    /**Relation one to many */
    public function EducationDetail(){
        return $this->hasMany(EducationDetail::class,'app_id');
    }

    /**Relation one to many */
    public function TechnicalExperience(){
        return $this->hasMany(TechnicalExperience::class,'app_id');
    }

    /**Relation one to many */
    public function KnownLanguages(){
        return $this->hasMany(KnownLanguages::class,'app_id');
    }

    /**Relation one to many */
    public function WorkExperience(){
        return $this->hasMany(WorkExperience::class,'app_id');
    }


    // this is a recommended way to declare event handlers
    public static function boot() {
        parent::boot();

        static::deleting(function($j) { // before delete() method call this
             $j->EducationDetail()->delete();
             $j->TechnicalExperience()->delete();
             $j->KnownLanguages()->delete();
             $j->WorkExperience()->delete();
             // do the rest of the cleanup...
        });
    }
}
