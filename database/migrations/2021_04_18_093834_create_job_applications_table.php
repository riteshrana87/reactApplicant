<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_applications', function (Blueprint $table) {
            $table->id();
            $table->string('fullName',100);
            $table->date('birthDate');
            $table->string('email',100);
            $table->string('gender',50);
            $table->string('address',150);
            $table->string('houseNumber',50);
            $table->string('zipcode',15);
            $table->string('preferred_location',50);
            $table->string('expected_ctc',50);
            $table->string('current_ctc',50);
            $table->string('notice_period',50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_applications');
    }
}
