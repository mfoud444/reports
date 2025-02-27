<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ReportProcess extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'report_type_id', 'generated_at'];

    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($model) {
            if (!$model->id) {
                $model->id = (string) Str::uuid();
            }
        });
    }

    public function reportType()
    {
        return $this->belongsTo(ReportType::class);
    }

    public function feedback()
    {
        return $this->hasOne(ReportFeedback::class);
    }
}