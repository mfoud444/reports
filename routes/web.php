<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


// Serve the index.html from the Vue app
// Route::get('/', function () {
//     return file_get_contents(public_path('app/index.html'));
// });


Route::get('/app/{any}', function () {
    $path = public_path('app/index.html');
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    return file_get_contents($path);
})
    ->name('FrontEndApp');
