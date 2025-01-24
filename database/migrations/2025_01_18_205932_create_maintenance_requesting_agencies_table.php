<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('maintenance_requesting_agencies', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // الجهة الطالبة للصيانة
            $table->boolean('state')->default(true); // Default column
            $table->timestamps(); // created_at and updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('maintenance_requesting_agencies');
    }
};
