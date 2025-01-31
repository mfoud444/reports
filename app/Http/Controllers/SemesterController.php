<?php


namespace App\Http\Controllers;

use App\Models\Semester;
use Illuminate\Http\Request;

class SemesterController extends Controller
{
    // Get all semesters
    public function index()
    {
        return Semester::all();
    }

    // Create a new semester
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return Semester::create($request->all());
    }

    // Get a specific semester
    public function show($id)
    {
        return Semester::findOrFail($id);
    }

    // Update a semester
    public function update(Request $request, $id)
    {
        $semester = Semester::findOrFail($id);
        $semester->update($request->all());
        return $semester;
    }

    // Delete a semester
    public function destroy($id)
    {
        Semester::destroy($id);
        return response()->noContent();
    }
}