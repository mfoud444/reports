<?php
namespace App\Http\Controllers;

use App\Models\PerformanceIndicator;
use Illuminate\Http\Request;

class PerformanceIndicatorController extends Controller
{
    // Get all performance indicators
    public function index()
    {
        return PerformanceIndicator::all();
    }

    // Create a new performance indicator
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return PerformanceIndicator::create($request->all());
    }

    // Get a specific performance indicator
    public function show($id)
    {
        return PerformanceIndicator::findOrFail($id);
    }

    // Update a performance indicator
    public function update(Request $request, $id)
    {
        $performanceIndicator = PerformanceIndicator::findOrFail($id);
        $performanceIndicator->update($request->all());
        return $performanceIndicator;
    }

    // Delete a performance indicator
    public function destroy($id)
    {
        PerformanceIndicator::destroy($id);
        return response()->noContent();
    }
}