<?php

namespace App\Http\Controllers;

use App\Models\ReportFeedback;
use Illuminate\Http\Request;
use App\Models\ReportProcess;
use Illuminate\Support\Facades\Log;

class ReportFeedbackController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'report_process_id' => 'required|exists:report_processes,id',
            'is_liked' => 'boolean'
        ]);

        $feedback = ReportFeedback::create($validated);
        return response()->json($feedback, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $feedback = ReportFeedback::with('reportProcess')->findOrFail($id);
        return response()->json($feedback);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $feedback = ReportFeedback::findOrFail($id);

        $validated = $request->validate([
            'is_liked' => 'sometimes|boolean',
        ]);

        $feedback->update($validated);
        return response()->json($feedback);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $feedback = ReportFeedback::findOrFail($id);
        $feedback->delete();
        return response()->json(null, 204);
    }

    /**
 * Save feedback for a specific report process.
 */
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


public function count(Request $request)
{
    $startDate = $request->query('startDate');
    $endDate = $request->query('endDate');

    // Build the query
    $query = ReportFeedback::query();

    // Apply date filters if provided
    if ($startDate && $endDate) {
        $query->whereBetween('created_at', [$startDate, $endDate]);
    }

    // Count feedback entries
    $count = $query->count();

    return response()->json(['count' => $count]);
}
}