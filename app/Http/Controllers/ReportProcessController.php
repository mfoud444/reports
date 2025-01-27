<?php

namespace App\Http\Controllers;

use App\Models\ReportFeedback;
use App\Models\ReportProcess;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


class ReportProcessController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reportProcesses = ReportProcess::with(['reportType', 'feedback'])->get();
        return response()->json($reportProcesses);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'report_type_id' => 'required|exists:report_types,id',
        ]);

        $reportProcess = ReportProcess::create([
            'report_type_id' => $validated['report_type_id'],
            'generated_at' => now(),
        ]);

        return response()->json($reportProcess, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $reportProcess = ReportProcess::with(['reportType', 'feedback'])->findOrFail($id);
        return response()->json($reportProcess);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $reportProcess = ReportProcess::findOrFail($id);

        $validated = $request->validate([
            'report_type_id' => 'sometimes|exists:report_types,id',
        ]);

        $reportProcess->update($validated);
        return response()->json($reportProcess);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $reportProcess = ReportProcess::findOrFail($id);
        $reportProcess->delete();
        return response()->json(null, 204);
    }


      /**
     * Get statistics for report processes.
     */
    public function getStatistics(Request $request)
    {
        // Count total report processes
        $totalReportProcesses = ReportProcess::count();

        // Count report processes by type
        $reportProcessesByType = ReportProcess::select('report_type_id', DB::raw('count(*) as total'))
            ->groupBy('report_type_id')
            ->with('reportType')
            ->get();

        // Count feedback
        $totalFeedback = ReportFeedback::count();
        $positiveFeedback = ReportFeedback::where('is_liked', true)->count();
        $negativeFeedback = ReportFeedback::where('is_liked', false)->count();

        // Monthly statistics
        $monthlyStatistics = ReportProcess::select(
            DB::raw('YEAR(generated_at) as year'),
            DB::raw('MONTH(generated_at) as month'),
            DB::raw('count(*) as total'),
            DB::raw('sum(case when report_type_id = 1 then 1 else 0 end) as achievement_reports'),
            DB::raw('sum(case when report_type_id = 2 then 1 else 0 end) as financial_reports'),
            DB::raw('sum(case when report_type_id = 3 then 1 else 0 end) as maintenance_reports')
        )
            ->groupBy('year', 'month')
            ->orderBy('year', 'desc')
            ->orderBy('month', 'desc')
            ->get();

        return response()->json([
            'total_report_processes' => $totalReportProcesses,
            'report_processes_by_type' => $reportProcessesByType,
            'feedback' => [
                'total_feedback' => $totalFeedback,
                'positive_feedback' => $positiveFeedback,
                'negative_feedback' => $negativeFeedback,
            ],
            'monthly_statistics' => $monthlyStatistics,
        ]);
    }

    /**
 * Count report processes by type.
 */
public function countByType(Request $request)
{
    $type = $request->query('type'); // Get the type from the query parameter
    $startDate = $request->query('startDate');
    $endDate = $request->query('endDate');

    // Validate the type
    if (!in_array($type, ['achievement', 'financial', 'maintenance'])) {
        return response()->json(['error' => 'Invalid report type'], 400);
    }

    // Get the report type ID based on the type name
    $reportType = \App\Models\ReportType::where('name', $type)->first();

    if (!$reportType) {
        return response()->json(['error' => 'Report type not found'], 404);
    }

    // Build the query
    $query = ReportProcess::where('report_type_id', $reportType->id);

    // Apply date filters if provided
    if ($startDate && $endDate) {
        $query->whereBetween('generated_at', [$startDate, $endDate]);
    }

    // Count report processes for the given type
    $count = $query->count();

    return response()->json(['count' => $count]);
}



public function saveFeedback(Request $request, $reportProcessId)
{
    try {
        // Validate the request
        $validated = $request->validate([
            'is_liked' => 'required|boolean',
        ]);

        // Find the report process
        $reportProcess = ReportProcess::findOrFail($reportProcessId);

        // Save feedback
        $reportProcess->feedback()->create([
            'is_liked' => $validated['is_liked'],
          
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Feedback saved successfully.',
        ]);

    } catch (\Exception $e) {
        // Log the error
        Log::error('Error saving feedback:', ['error' => $e->getMessage()]);

        return response()->json([
            'success' => false,
            'message' => 'An error occurred while saving feedback.',
            'error' => $e->getMessage(),
        ], 500);
    }
}

}