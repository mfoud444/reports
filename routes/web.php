<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });


// Serve the index.html from the Vue app
// Route::get('/', function () {
//     return file_get_contents(public_path('app/index.html'));
// });

Route::get('/{anypath?}', function ($anypath = null) {
    // Path to your index.html
    $path = public_path('app/index.html');
    
    // Ensure the index.html exists, otherwise return a 404 error
    abort_unless(file_exists($path), 400, 'Page is not Found!');
    
    // Return the contents of the index.html file
    return file_get_contents($path);
})->where('anypath', '.*')  // This regular expression will match any path after /reports/
  ->name('FrontEndApp');
