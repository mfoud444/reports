<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportType extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'state'];

    /**
     * Get the processes associated with this report type.
     */
    public function processes()
    {
        return $this->hasMany(ReportProcess::class);
    }

    /**
     * Get the total number of processes for this report type.
     */
    public function getTotalProcessesAttribute()
    {
        return $this->processes()->count();
    }

    /**
     * Get the total number of liked feedback for this report type.
     */
    public function getTotalLikesAttribute()
    {
        return $this->processes()->whereHas('feedback', function ($query) {
            $query->where('is_liked', true);
        })->count();
    }
}