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