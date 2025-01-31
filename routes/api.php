<?php 
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AdministrativeAreaController;
use App\Http\Controllers\EstablishmentController;
use App\Http\Controllers\ReportTypeController; 
use App\Http\Controllers\TrainingClassController;
use App\Http\Controllers\ExecutingAgencyController;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\PerformanceIndicatorController;
use App\Http\Controllers\MaintenanceTypeController;
use App\Http\Controllers\RequestTypeController;
use App\Http\Controllers\MaintenanceRequestingAgencyController;
use App\Http\Controllers\DepartmentController;

use App\Http\Controllers\ReportProcessController;
use App\Http\Controllers\ReportFeedbackController;


Route::apiResource('areas', AdministrativeAreaController::class);
Route::apiResource('establishments', EstablishmentController::class);
Route::apiResource('reporttypes', ReportTypeController::class); 
Route::apiResource('trainingclasses', TrainingClassController::class);
Route::apiResource('executingagencies', ExecutingAgencyController::class);
Route::apiResource('resources', ResourceController::class);
Route::apiResource('performanceindicators', PerformanceIndicatorController::class);
Route::apiResource('maintenancetypes', MaintenanceTypeController::class);
Route::apiResource('requesttypes', RequestTypeController::class);
Route::apiResource('maintenancerequestingagencies', MaintenanceRequestingAgencyController::class);
Route::apiResource('departments', DepartmentController::class);

use App\Http\Controllers\ReportController;

Route::post('/generatereport', [ReportController::class, 'generateReport']);

// ReportProcess Routes
Route::apiResource('report-processes', ReportProcessController::class);

// Route::get('report-processes/statistics', [ReportProcessController::class, 'getStatistics']);
Route::get('reportprocesses/count', [ReportProcessController::class, 'countByType']);
Route::get('reportfeedbacks/count', [ReportFeedbackController::class, 'count']);

// ReportFeedback Routes
Route::apiResource('report-feedbacks', ReportFeedbackController::class);

Route::get('report-types/{id}/statistics', [ReportTypeController::class, 'statistics']);

Route::post('/report-processes/{reportProcessId}/feedback', [ReportProcessController::class, 'saveFeedback']);

use App\Http\Controllers\SemesterController;

Route::apiResource('semesters', SemesterController::class);


