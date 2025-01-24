<?php
namespace App\Http\Controllers;

use App\Models\ExecutingAgency;
use Illuminate\Http\Request;

class ExecutingAgencyController extends Controller
{
    // Get all executing agencies
    public function index()
    {
        return ExecutingAgency::all();
    }

    // Create a new executing agency
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return ExecutingAgency::create($request->all());
    }

    // Get a specific executing agency
    public function show($id)
    {
        return ExecutingAgency::findOrFail($id);
    }

    // Update an executing agency
    public function update(Request $request, $id)
    {
        $executingAgency = ExecutingAgency::findOrFail($id);
        $executingAgency->update($request->all());
        return $executingAgency;
    }

    // Delete an executing agency
    public function destroy($id)
    {
        ExecutingAgency::destroy($id);
        return response()->noContent();
    }
}