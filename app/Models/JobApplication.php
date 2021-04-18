<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\EducationDetail;
use App\Models\TechnicalExperience;
use App\Models\KnownLanguages;
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
}
