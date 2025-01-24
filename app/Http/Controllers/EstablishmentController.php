<?php
namespace App\Http\Controllers;

use App\Models\Establishment;
use Illuminate\Http\Request;

class EstablishmentController extends Controller
{
    public function index()
    {
        return Establishment::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
           
        ]);

        return Establishment::create($request->all());
    }

    public function show($id)
    {
        return Establishment::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $establishment = Establishment::findOrFail($id);
        $establishment->update($request->all());
        return $establishment;
    }

    public function destroy($id)
    {
        $establishment = Establishment::findOrFail($id);
        $establishment->delete();
        return response()->noContent();
    }
}