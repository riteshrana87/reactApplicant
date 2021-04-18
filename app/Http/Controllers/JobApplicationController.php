<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobApplication;

class JobApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $applications = JobApplication::with(['EducationDetail','TechnicalExperience','KnownLanguages'])->get();
        return view('app-form.application-list')->with('applications',$applications);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $job = JobApplication::with(['EducationDetail','TechnicalExperience','KnownLanguages'])->where('id',$id)->first();
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
