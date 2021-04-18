@extends('layouts.app')
@section('content')


        {!! Form::Open(['action'=>['App\Http\Controllers\JobApplicationController@update',$job->id],'method'=>'Post','enctype'=>'multipart/form-data']) !!}

                {{method_field('PATCH')}}
                   <div class="row">
                        <div class="col-sm-3">
                            <div class="form-group">
                                {{Form::label('fullName','Full Name',['class' => 'h4 display-6'])}}
                                {{Form::text('fullName',$job->fullName,['class' => 'form-control','placeholder'=>'MAX 50 CHARACTERS'])}}
                            </div>
                            @error('fullName')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                {{Form::label('email','Email',['class' => 'h4 display-6'])}}
                                {{Form::text('email',$job->email,['class' => 'form-control','placeholder'=>'Email'])}}
                            </div>
                            @error('email')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
                   </div>
                   <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            {{Form::label('houseNumber','House No',['class' => 'h4 display-6'])}}
                            {{Form::text('houseNumber',$job->houseNumber,['class' => 'form-control','placeholder'=>'House No'])}}
                        </div>
                        @error('houseNumber')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                   </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                {{Form::label('address','Address',['class' => 'h4 display-6'])}}
                                {{Form::text('address',$job->address,['class' => 'form-control','placeholder'=>'Email'])}}
                            </div>
                            @error('address')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                       </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                {{Form::label('zipcode','Zip code',['class' => 'h4 display-6'])}}
                                {{Form::text('zipcode',$job->zipcode,['class' => 'form-control','placeholder'=>'Zipcode','maxlength' => 6])}}
                            </div>
                            @error('zipcode')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                    </div>
                   </div>
                   <div class="row">
                       <div class="col-sm-3">
                           <div class="form-group">
                                {{Form::label('birthDate','birthDate',['class' => 'h4 display-6'])}}
                                {{Form::text('birthDate',$job->birthDate,['class' => 'form-control','placeholder'=>'Birth of Date'])}}
                            </div>
                            @error('birthDate')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                       </div>
                       <div class="col-sm-3">
                            <div class="form-group">
                                {{Form::label('gender','Gender',['class' => 'h4 display-6'])}}
                                {{Form::select('gender',array('male' => 'Male','female' => 'Female'),$job->gender,['class' => 'form-control','placeholder'=>'--Select--'])}}
                            </div>
                            @error('gender')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="col-sm-3">
                            <div class="form-group">
                                {{Form::label('preferred_location','Preferred Location',['class' => 'h4 display-6'])}}
                                {{Form::select('preferred_location',array('Ahmedabad' => 'Ahmedabad','Mumbai' => 'Mumbai','New York' => 'New York'),$job->preferred_location,['class' => 'form-control','placeholder'=>'--Select--'])}}
                            </div>
                            @error('preferred_location')
                                <div class="alert alert-danger">{{ $message }}</div>
                            @enderror
                        </div>
                   </div>
                   <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group">
                            {{Form::label('current_ctc','Current CTC',['class' => 'h4 display-6'])}}
                            {{Form::text('current_ctc',$job->current_ctc,['class' => 'form-control','placeholder'=>'Current CTC'])}}
                        </div>
                        @error('current_ctc')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            {{Form::label('expected_ctc','Expected CTC',['class' => 'h4 display-6'])}}
                            {{Form::text('expected_ctc',$job->expected_ctc,['class' => 'form-control','placeholder'=>'Expected CTC'])}}
                        </div>
                        @error('expected_ctc')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            {{Form::label('notice_period','Notice Period',['class' => 'h4 display-6'])}}
                            {{Form::text('notice_period',$job->notice_period,['class' => 'form-control','placeholder'=>'Notice'])}}
                        </div>
                        @error('notice_period')
                            <div class="alert alert-danger">{{ $message }}</div>
                        @enderror
                    </div>
                   </div>





                {{Form::submit('SAVE',['class'=>'btn btn-primary'])}}


        {!! Form::Close() !!}
@endsection

