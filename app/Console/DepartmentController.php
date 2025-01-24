<?php
namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    // Get all departments
    public function index()
    {
        return Department::all();
    }

    // Create a new department
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return Department::create($request->all());
    }

    // Get a specific department
    public function show($id)
    {
        return Department::findOrFail($id);
    }

    // Update a department
    public function update(Request $request, $id)
    {
        $department = Department::findOrFail($id);
        $department->update($request->all());
        return $department;
    }

    // Delete a department
    public function destroy($id)
    {
        Department::destroy($id);
        return response()->noContent();
    }
}