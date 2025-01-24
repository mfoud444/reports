<?php
namespace App\Http\Controllers;

use App\Models\RequestType;
use Illuminate\Http\Request;

class RequestTypeController extends Controller
{
    // Get all request types
    public function index()
    {
        return RequestType::all();
    }

    // Create a new request type
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return RequestType::create($request->all());
    }

    // Get a specific request type
    public function show($id)
    {
        return RequestType::findOrFail($id);
    }

    // Update a request type
    public function update(Request $request, $id)
    {
        $requestType = RequestType::findOrFail($id);
        $requestType->update($request->all());
        return $requestType;
    }

    // Delete a request type
    public function destroy($id)
    {
        RequestType::destroy($id);
        return response()->noContent();
    }
}