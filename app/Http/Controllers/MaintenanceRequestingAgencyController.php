<?php
namespace App\Http\Controllers;

use App\Models\MaintenanceRequestingAgency;
use Illuminate\Http\Request;

class MaintenanceRequestingAgencyController extends Controller
{
    // Get all maintenance requesting agencies
    public function index()
    {
        return MaintenanceRequestingAgency::all();
    }

    // Create a new maintenance requesting agency
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return MaintenanceRequestingAgency::create($request->all());
    }

    // Get a specific maintenance requesting agency
    public function show($id)
    {
        return MaintenanceRequestingAgency::findOrFail($id);
    }

    // Update a maintenance requesting agency
    public function update(Request $request, $id)
    {
        $maintenanceRequestingAgency = MaintenanceRequestingAgency::findOrFail($id);
        $maintenanceRequestingAgency->update($request->all());
        return $maintenanceRequestingAgency;
    }

    // Delete a maintenance requesting agency
    public function destroy($id)
    {
        MaintenanceRequestingAgency::destroy($id);
        return response()->noContent();
    }
}