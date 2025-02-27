<?php

namespace App\Http\Controllers;

use App\Models\ReportFeedback;
use App\Models\ReportProcess;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
class ReportFeedbackController extends Controller
{


  

    /**
     * Store a newly created resource in storage.
     */
    public function makeFeedback(Request $request)
    {
        try {
        
            DB::beginTransaction();

            $reportProcess = ReportProcess::find($request->report_process_id);
            if (!$reportProcess) {
                $reportProcess = ReportProcess::create([
                    'id' => $request->report_process_id,
                    'report_type_id' => $this->getReportTypeId($request->reportType),
                    'generated_at' => now(),
                ]);
            }
            

            // Create feedback
            $feedback = ReportFeedback::create([
                'report_process_id' => $request->report_process_id,
                'is_liked' => $request->is_liked
            ]);

            DB::commit();

            return response()->json([
                'success' => true,
              
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error creating feedback and process:', ['error' => $e->getMessage()]);
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while saving feedback.',
                'error' => $e->getMessage()
            ], 500);
        }
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


      private function getReportTypeId($reportType)
    {
        // Implement logic to fetch the report type ID from the database
        $reportTypeModel = \App\Models\ReportType::where('name', $reportType)->first();
        return $reportTypeModel ? $reportTypeModel->id : null;
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

    // Count total, positive, and negative feedback
    $positive_feedback = $query->clone()->where('is_liked', true)->count();
    $negative_feedback = $query->clone()->where('is_liked', false)->count();
    $total = $positive_feedback + $negative_feedback;

    return response()->json([
        'total' => $total,
        'positive_feedback' => $positive_feedback,
        'negative_feedback' => $negative_feedback
    ]);
}
}