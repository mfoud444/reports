<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportFeedback extends Model
{
    use HasFactory;

    protected $fillable = ['report_process_id', 'is_liked'];

    public function reportProcess()
    {
        return $this->belongsTo(ReportProcess::class);
    }
}