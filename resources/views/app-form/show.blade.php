@extends('layouts.app')
@section('content')
    <h1 class="display-4 text-center">Application View</h1>
    <div class="card">
     <div class="container-fliud">

         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >


            <div class="panel panel-info">
              <div class="panel-heading">
                <h3 class="panel-title">{{$job->fullName}}</h3>
              </div>
              <div class="panel-body">
                <div class="row">

                  <div class=" col-md-9 col-lg-9 ">
                    <table class="table table-user-information">
                      <tbody>
                        <tr>
                          <td>Address:</td>
                          <td>{{$job->address}}</td>
                        </tr>
                        <tr>
                          <td>zipcode:</td>
                          <td>{{$job->zipcode}}</td>
                        </tr>
                        <tr>
                          <td>Date of Birth</td>
                          <td>{{$job->birthDate}}</td>
                        </tr>

                           <tr>
                               <tr>
                          <td>Gender</td>
                          <td>{{$job->gender}}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td><a href="mailto:{{$job->email}}">{{$job->email}}</a></td>
                        </tr>
                        <tr>
                            <td>Current CTC</td>
                            <td>{{$job->current_ctc}}</td>
                        </tr>
                        <tr>
                            <td>Expected CTC</td>
                            <td>{{$job->expected_ctc}}</td>
                        </tr>
                        <tr>
                            <td>Notice Period</td>
                            <td>{{$job->notice_period}}</td>
                        </tr>
                        <tr>
                            <td>Preferred Location</td>
                            <td>{{$job->preferred_location}}</td>
                        </tr>
                        <tr>
                            <td>Education Details</td>
                            <td>
                                @if(count($job->EducationDetail) > 0)
                                @foreach($job->EducationDetail as $a)
                                <p>Board : <strong>{{$a->education_board}}</strong></p>
                                <p>Year : <strong>{{$a->year}}</strong></p>
                                <p>CGPA/Percentage : <strong>{{$a->percentage}}</strong></p>
                                <hr/>
                                @endforeach
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td>Technical Experience</td>
                            <td>
                                @if(count($job->TechnicalExperience) > 0)
                                @foreach($job->TechnicalExperience as $a)
                                <p><strong>{{$a->technology_name}} : {{$a->technology_value}}</strong></p>
                                <hr/>
                                @endforeach
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td>Known Languages</td>
                            <td>
                                @if(count($job->KnownLanguages) > 0)
                                @foreach($job->KnownLanguages as $a)

                                <p><strong>{{$a->language_name}}</strong><br/>{{$a->read ?'Read : Yes,':''}} {{$a->write ?'Write : Yes,':''}}  {{$a->speak ?'Speak : Yes':''}}</p>
                                <hr/>
                                @endforeach
                                @endif
                            </td>
                        </tr>

                      </tbody>
                    </table>

                    <a href="{{url('app-forms')}}"><button class="btn btn-primary">BACK</button> </a>

                  </div>
                </div>
              </div>
     </div>
 </div>


 </div>


    @endsection
