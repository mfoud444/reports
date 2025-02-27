<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('report_processes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('report_type_id')->constrained('report_types');
            $table->timestamp('generated_at');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('report_processes');
    }
};