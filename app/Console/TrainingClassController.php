<?php
namespace App\Http\Controllers;

use App\Models\TrainingClass;
use Illuminate\Http\Request;

class TrainingClassController extends Controller
{
    // Get all training classes
    public function index()
    {
        return TrainingClass::all();
    }

    // Create a new training class
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return TrainingClass::create($request->all());
    }

    // Get a specific training class
    public function show($id)
    {
        return TrainingClass::findOrFail($id);
    }

    // Update a training class
    public function update(Request $request, $id)
    {
        $trainingClass = TrainingClass::findOrFail($id);
        $trainingClass->update($request->all());
        return $trainingClass;
    }

    // Delete a training class
    public function destroy($id)
    {
        TrainingClass::destroy($id);
        return response()->noContent();
    }
}