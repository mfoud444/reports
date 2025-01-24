<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportProcess extends Model
{
    use HasFactory;

    protected $fillable = ['report_type_id', 'generated_at'];

    public function reportType()
    {
        return $this->belongsTo(ReportType::class);
    }

    public function feedback()
    {
        return $this->hasOne(ReportFeedback::class);
    }
}