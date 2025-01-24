<?php
namespace App\Http\Controllers;

use App\Models\MaintenanceType;
use Illuminate\Http\Request;

class MaintenanceTypeController extends Controller
{
    // Get all maintenance types
    public function index()
    {
        return MaintenanceType::all();
    }

    // Create a new maintenance type
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return MaintenanceType::create($request->all());
    }

    // Get a specific maintenance type
    public function show($id)
    {
        return MaintenanceType::findOrFail($id);
    }

    // Update a maintenance type
    public function update(Request $request, $id)
    {
        $maintenanceType = MaintenanceType::findOrFail($id);
        $maintenanceType->update($request->all());
        return $maintenanceType;
    }

    // Delete a maintenance type
    public function destroy($id)
    {
        MaintenanceType::destroy($id);
        return response()->noContent();
    }
}