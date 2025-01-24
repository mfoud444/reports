<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaintenanceRequestingAgency extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'state', // Default column
    ];
}