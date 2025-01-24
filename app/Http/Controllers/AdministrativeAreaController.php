<?php
namespace App\Http\Controllers;

use App\Models\AdministrativeArea;
use Illuminate\Http\Request;

class AdministrativeAreaController extends Controller
{
    public function index()
    {
        return AdministrativeArea::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        return AdministrativeArea::create($request->all());
    }

    public function show($id)
    {
        return AdministrativeArea::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $area = AdministrativeArea::findOrFail($id);
        $area->update($request->all());
        return $area;
    }

    public function destroy($id)
    {
        $area = AdministrativeArea::findOrFail($id);
        $area->delete();
        return response()->noContent();
    }
}