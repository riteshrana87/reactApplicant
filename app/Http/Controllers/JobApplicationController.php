<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobApplication;
use App\Models\EducationDetail;
use App\Models\KnownLanguages;
use App\Models\TechnicalExperience;
use App\Models\WorkExperience;
use Exception;

class JobApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $r)
    {
        if($r->search_applicant){
            $applications = JobApplication::with(['EducationDetail','TechnicalExperience','KnownLanguages'])->where('fullName','LIKE',"%".$r->search_applicant."%")->orWhere('email','LIKE','%'.$r->search_applicant.'%')->get();
        }else{
            $applications = JobApplication::with(['EducationDetail','TechnicalExperience','KnownLanguages'])->get();
        }
        return view('app-form.application-list')->with(['applications' => $applications,'search' => $r->search_applicant]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $r)
    {
        $this->validate($r, [
            'fullName' => 'required|min:3|max:50',
            'email' => 'required|email',
            'houseNumber' => 'required|min:1|max:6',
            'address' => 'required',
            'zipcode' => 'required',
            'birthDate' => 'required',
            'gender' => 'required',
            'preferred_location' => 'required',
            'current_ctc' => 'required',
            'expected_ctc' => 'required',
            'notice_period' => 'required'
        ]);

        try{
            //job application table
        $job = new JobApplication;
        $job->fullName = $r->fullName;
        $job->email = $r->email;
        $job->houseNumber = $r->houseNumber;
        $job->address = $r->address;
        $job->zipcode = $r->zipcode;
        $job->birthDate = date('Y-m-d',strtotime($r->birthDate));
        $job->gender = $r->gender;
        $job->preferred_location = $r->preferred_location;
        $job->current_ctc = $r->current_ctc;
        $job->expected_ctc = $r->expected_ctc;
        $job->notice_period = $r->notice_period;
        $job->save(); //saving job application
        $job_id = $job->id; //get inserted job id

        /**Storing education details */
        if($r->education_details){
          $ed = array();
          foreach($r->education_details as $edd){
              $edd['app_id'] = $job_id;
              array_push($ed,$edd);
          }

          if(count($ed) > 0)
          EducationDetail::insert($ed);
        }

        /**Storing work technical knowledge details */
        if($r->technical_expertise){
          $te = array();
          foreach($r->technical_expertise as $ted){
              $ted['app_id'] = $job_id;
              unset($ted['is_selected']);
              array_push($te,$ted);
          }
          if(count($te) > 0)
          TechnicalExperience::insert($te);
        }

        /**Storing work experience details */
        if($r->work_experience){
            $we = array();
            foreach($r->work_experience as $wed){
                $wed['app_id'] = $job_id;
                if(isset($wed['from_date'])){
                    $wed['from_date'] = date('Y-m-d',strtotime($wed['from_date']));
                }
                if(isset($wed['to_date'])){
                    $wed['to_date'] = date('Y-m-d',strtotime($wed['to_date']));
                }
                array_push($we,$wed);
            }
            if(count($we) > 0)
            WorkExperience::insert($we);
        }

        /**Storing known languages */
        if($r->known_languages){
            $knwLang = array();
            foreach($r->known_languages as $lang){
                $lang['app_id'] = $job_id;
                unset($lang['is_selected']);
                $lang['read'] = $lang['ability']['read']?1:0;
                $lang['write'] = $lang['ability']['write']?1:0;
                $lang['speak'] = $lang['ability']['speak']?1:0;
                unset($lang['ability']);
                array_push($knwLang,$lang);
            }
            if(count($knwLang) > 0)
            KnownLanguages::insert($knwLang);
        }
        echo json_encode(['code' => 1,'status' => 'success','message' => 'application received successfully.']);

        }catch(Exception $e){

          echo json_encode(['code' => 0,'status' => 'failed','message' => $e->getMessage()]);

        }


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $job = JobApplication::with(['EducationDetail','TechnicalExperience','KnownLanguages','WorkExperience'])->where('id',$id)->first();
        return view('app-form.show')->with('job',$job);
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $job = JobApplication::with(['EducationDetail','TechnicalExperience','KnownLanguages'])->where('id',$id)->first();
        return view('app-form.edit')->with(['job' => $job]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'fullName' => 'required|min:3|max:50',
            'email' => 'required|email',
            'houseNumber' => 'required|min:1|max:6',
            'address' => 'required',
            'zipcode' => 'required',
            'birthDate' => 'required',
            'gender' => 'required',
            'preferred_location' => 'required',
            'current_ctc' => 'required',
            'expected_ctc' => 'required',
            'notice_period' => 'required'
        ]);
        $job = JobApplication::find($id);
        $job->fullName = $request->fullName;
        $job->email = $request->email;
        $job->houseNumber = $request->houseNumber;
        $job->address = $request->address;
        $job->zipcode = $request->zipcode;
        $job->birthDate = $request->birthDate;
        $job->gender = $request->gender;
        $job->preferred_location = $request->preferred_location;
        $job->current_ctc = $request->current_ctc;
        $job->expected_ctc = $request->expected_ctc;
        $job->notice_period = $request->notice_period;
        $job->save();

        return redirect('/app-forms') -> with('message','Job Application updated.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $job = JobApplication::where('id',$id)->delete();
        return redirect('/app-forms') -> with('message','Job Application removed successfully.');
    }
}
