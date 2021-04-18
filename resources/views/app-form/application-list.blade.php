@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    @if(session('message'))
                    <div class="alert alert-success">
                        {{ session('message') }}
                    </div>
                    @endif
                @if(count($applications)>0)

                                <form method="get" class="row">
                                    <div class="col-md-3">
                                        <input class="form-control" name="search_applicant" value="{{$search}}" type="text" placeholder="Search by Email, Name"/>
                                    </div>
                                    <div class="col-md-3">
                                        <button class="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            <div class="row">

                                    <table id="job_applicant" class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Gender</th>
                                            <th>Expected CTC</th>
                                            <th>Current CTC</th>
                                            <th> </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($applications as $application)
                                        <tr>

                                            <td class="">{{$application->fullName}}</td>
                                            <td class="">{{$application->email}}</td>
                                            <td class="">{{$application->gender}}</td>
                                            <td class="">{{$application->expected_ctc}}</td>
                                            <td class="">{{$application->current_ctc}}</td>

                                            <td class="" style="text-align: center">
                                                <div class="row">
                                                    <div class="col-sm-2">
                                                        {!! Form::Open(['action'=>['App\Http\Controllers\JobApplicationController@destroy',$application],'method'=>'Delete']) !!}

                                                        {{Form::button('<i class="fa fa-trash"></i>',['type' => 'Submit','class'=>'btn btn-danger'])}}

                                                        {!! Form::Close() !!}
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <a href="{{url('app-forms/'.$application->id.'/edit')}}" class="btn btn-primary"><i class="fa fa-pencil"></i></a>
                                                    </div>
                                                    <div class="col-sm-2">
                                                        <a href="{{url('app-forms/'.$application->id)}}" class="btn btn-primary"><i class="fa fa-eye"></i></a>
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                        @endforeach

                                        </tbody>
                                    </table>

                            </div>

                    @else
                        <h1 class="display-4">There's no any Application</h1>

                @endif
                </div>

        </div>
    </div>
</div>
@endsection
