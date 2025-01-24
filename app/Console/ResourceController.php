<?php
namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    // Get all resources
    public function index()
    {
        return Resource::all();
    }

    // Create a new resource
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return Resource::create($request->all());
    }

    // Get a specific resource
    public function show($id)
    {
        return Resource::findOrFail($id);
    }

    // Update a resource
    public function update(Request $request, $id)
    {
        $resource = Resource::findOrFail($id);
        $resource->update($request->all());
        return $resource;
    }

    // Delete a resource
    public function destroy($id)
    {
        Resource::destroy($id);
        return response()->noContent();
    }
}