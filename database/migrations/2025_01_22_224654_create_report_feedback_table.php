<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        // Drop the table if it exists
        Schema::dropIfExists('report_feedback');
        
        Schema::create('report_feedback', function (Blueprint $table) {
            $table->id();
            $table->uuid('report_process_id');
            $table->boolean('is_liked');
            $table->timestamps();

            $table->foreign('report_process_id')
                  ->references('id')
                  ->on('report_processes')
                  ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('report_feedback');
    }
};