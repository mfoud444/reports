<?php
namespace App\Http\Controllers;

use App\Models\ReportType;
use Illuminate\Http\Request;

class ReportTypeController extends Controller
{
    public function index()
    {
        return ReportType::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return ReportType::create($request->all());
    }

    public function show($id)
    {
        return ReportType::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $reportType = ReportType::findOrFail($id);
        $reportType->update($request->all());
        return $reportType;
    }

    public function destroy($id)
    {
        $reportType = ReportType::findOrFail($id);
        $reportType->delete();
        return response()->noContent();
    }

    public function statistics($id)
    {
        $reportType = ReportType::findOrFail($id);

        $totalProcesses = $reportType->processes()->count();
        $totalLikes = $reportType->processes()->whereHas('feedback', function ($query) {
            $query->where('is_liked', true);
        })->count();

        return response()->json([
            'total_processes' => $totalProcesses,
            'total_likes' => $totalLikes,
        ]);
    }
}