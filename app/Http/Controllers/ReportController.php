<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpOffice\PhpWord\TemplateProcessor;
use Dompdf\Dompdf;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;
use App\Models\ReportProcess;
use Dompdf\Options;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReportMail;
class ReportController extends Controller
{
    public function generateReport(Request $request)
    {
        try {
            // Validate the UUID
            $request->validate([
                'id' => 'required|uuid',
                // ... other validation rules
            ]);

            $data = $request->all();
            $reportType = $request->input('reportType', 'achievement');
            $region = $request->input('region', 'الباحة');
            $email = $request->input('email'); 
            $documentationFiles = [];
            $tempFiles = [];
            for ($i = 1; $i <= 4; $i++) {
                $docKey = 'documentation' . $i;
                if ($request->hasFile($docKey)) {
                    $file = $request->file($docKey);
                    $tempFilePath = storage_path('temp/' . Str::uuid() . '.' . $file->getClientOriginalExtension());
                    $file->move(storage_path('temp'), basename($tempFilePath));
                    $documentationFiles[$docKey] = $tempFilePath;
                    $tempFiles[] = $tempFilePath;
                }
            }

            $stampFile = null;
            if ($request->hasFile('stamp')) {
                $file = $request->file('stamp');
                $tempFilePath = storage_path('temp/' . Str::uuid() . '.' . $file->getClientOriginalExtension());
                $file->move(storage_path('temp'), basename($tempFilePath));
                $stampFile = $tempFilePath;
                $tempFiles[] = $tempFilePath;
            }
            $templatePath = storage_path("templates/{$reportType}_report.docx");
            $templateProcessor = new TemplateProcessor($templatePath);
            $reportData = [
                'college' => $data['college'] ?? '' . "\n" . $this->translateReportType($reportType),
                'semester' => $data['semester'] ?? '',
                'institution' => $data['institution'] ?? '',
                'topic' => $data['topic'] ?? '',
                'executionDate' => $data['executionDate'] ?? '',
                'supervisor' => $data['supervisor'] ?? '',
                'resources' => $data['resources'] ?? '',
                'operationalGoal' => $data['operationalGoal'] ?? '',
                'executionProcedures' => $data['executionProcedures'] ?? '',
                'challenges' => $data['challenges'] ?? '',
                'recommendations' => $data['recommendations'] ?? '',
                'performanceIndicator' => $data['performanceIndicator'] ?? '',
                'target' => $data['target'] ?? '',
                'quantity' => $data['quantity'] ?? '',
                'achieved' => $data['achieved'] ?? '',
                'percentage' => $data['percentage'] ?? '',
                'reporter' => $data['reporter'] ?? '',
                'reportDate' => $data['reportDate'] ?? '',
                'approver' => $data['approver'] ?? '',
                'reportNumber' => $data['reportNumber'] ?? '',
                'maintenanceTopic' => $data['maintenanceTopic'] ?? '',
                'maintenanceType' => $data['maintenanceType'] ?? '',
                'maintenanceDate' => $data['maintenanceDate'] ?? '',
                'maintenanceTime' => $data['maintenanceTime'] ?? '',
                'resourceDescription' => $data['resourceDescription'] ?? '',
                'mainSupervisor' => $data['mainSupervisor'] ?? '',
                'subSupervisor' => $data['subSupervisor'] ?? '',
                'generalGoal' => $data['generalGoal'] ?? '',
                'department' => $data['department'] ?? '',
                'auditDate' => $data['auditDate'] ?? '',
                'requestType' => $data['requestType'] ?? '',
                'faultDescription' => $data['faultDescription'] ?? '',
                'revenueType1' => $data['revenueType1'] ?? '',
                'revenueAmount1' => $data['revenueAmount1'] ?? '0.00',
                'expenseAmount1' => $data['expenseAmount1'] ?? '0.00',
                'remainingAmount1' => $data['remainingAmount1'] ?? '0.00',
                'percentage1' => $data['percentage1'] ?? '0.00%',
                'revenueType2' => $data['revenueType2'] ?? '',
                'revenueAmount2' => $data['revenueAmount2'] ?? '0.00',
                'expenseAmount2' => $data['expenseAmount2'] ?? '0.00',
                'remainingAmount2' => $data['remainingAmount2'] ?? '0.00',
                'percentage2' => $data['percentage2'] ?? '0.00%',
                'revenueType3' => $data['revenueType3'] ?? '',
                'revenueAmount3' => $data['revenueAmount3'] ?? '0.00',
                'expenseAmount3' => $data['expenseAmount3'] ?? '0.00',
                'remainingAmount3' => $data['remainingAmount3'] ?? '0.00',
                'percentage3' => $data['percentage3'] ?? '0.00%',
                'revenueType4' => $data['revenueType4'] ?? '',
                'revenueAmount4' => $data['revenueAmount4'] ?? '0.00',
                'expenseAmount4' => $data['expenseAmount4'] ?? '0.00',
                'remainingAmount4' => $data['remainingAmount4'] ?? '0.00',
                'percentage4' => $data['percentage4'] ?? '0.00%',
                'revenueType5' => $data['revenueType5'] ?? '',
                'revenueAmount5' => $data['revenueAmount5'] ?? '0.00',
                'expenseAmount5' => $data['expenseAmount5'] ?? '0.00',
                'remainingAmount5' => $data['remainingAmount5'] ?? '0.00',
                'percentage5' => $data['percentage5'] ?? '0.00%',
                'revenueType6' => $data['revenueType6'] ?? '',
                'revenueAmount6' => $data['revenueAmount6'] ?? '0.00',
                'expenseAmount6' => $data['expenseAmount6'] ?? '0.00',
                'remainingAmount6' => $data['remainingAmount6'] ?? '0.00',
                'percentage6' => $data['percentage6'] ?? '0.00%',
                'revenueType7' => $data['revenueType7'] ?? '',
                'revenueAmount7' => $data['revenueAmount7'] ?? '0.00',
                'expenseAmount7' => $data['expenseAmount7'] ?? '0.00',
                'remainingAmount7' => $data['remainingAmount7'] ?? '0.00',
                'percentage7' => $data['percentage7'] ?? '0.00%',
                'revenueType8' => $data['revenueType8'] ?? '',
                'revenueAmount8' => $data['revenueAmount8'] ?? '0.00',
                'expenseAmount8' => $data['expenseAmount8'] ?? '0.00',
                'remainingAmount8' => $data['remainingAmount8'] ?? '0.00',
                'percentage8' => $data['percentage8'] ?? '0.00%',
                'totalRevenue' => $data['totalRevenue'] ?? '0.00',
                'totalExpenses' => $data['totalExpenses'] ?? '0.00',
                'totalRemaining' => $data['totalRemaining'] ?? '0.00',
                'totalPercentage' => $data['totalPercentage'] ?? '0.00%',
                'documentation1'  => '',
                'documentation2'  => '',
                'documentation3'  => '',
                'documentation4'  => '',
                'stamp'  => '',
            ];

            for ($i = 1; $i <= 4; $i++) {
                $docKey = 'documentation' . $i;
                if (isset($documentationFiles[$docKey])) {
                    $templateProcessor->setImageValue($docKey,  $documentationFiles[$docKey]);
                }
            }
            if ($stampFile) {
                $templateProcessor->setImageValue('stamp',  $stampFile);
            }
            foreach ($reportData as $placeholder => $value) {
                $templateProcessor->setValue($placeholder, $value);
            }
            $tempDocxPath = storage_path('temp/' . Str::uuid() . '.docx');
            $templateProcessor->saveAs($tempDocxPath);
            $tempFiles[] = $tempDocxPath; 

            $pdfPath = $this->convertDocxToPdfUsingAPI($tempDocxPath);

            
         

            foreach ($tempFiles as $file) {
                if (file_exists($file)) {
                    unlink($file);
                }
            }

            // Read the PDF content
            $pdfContent = file_get_contents($pdfPath);

            if ($email && $email != '') {
                try {
                    // Send email with the PDF attachment
                    Mail::to($email)->send(new ReportMail($pdfPath));
            
                    // Delete the file after sending
                    if (file_exists($pdfPath)) {
                        unlink($pdfPath);
                    }
            
                    return response()->json([
                        'success' => true,
                        'reportProcessId' => $request->input('id'),
                        'message' => 'Report sent to email successfully.',
                    ]);
                } catch (\Exception $e) {
                    Log::error('Error sending email:', ['error' => $e->getMessage()]);
            
                    return response()->json([
                        'success' => false,
                        'message' => 'Failed to send email. Please try again later.',
                        'error' => $e->getMessage(), // Optional: include for debugging (remove in production)
                    ], 500);
                }
            }
            

            // Encode the file as Base64 to include it in the response
            $responseData = [
                'reportProcessId' =>$request->input('id'),
                'file' => base64_encode($pdfContent),
            ];

            // Delete the file after preparing the response
            if (file_exists($pdfPath)) {
                unlink($pdfPath);
            }

            return response()->json($responseData);
        } catch (\Exception $e) {
            Log::error('Error generating report:', ['error' => $e->getMessage()]);
            foreach ($tempFiles as $file) {
                if (file_exists($file)) {
                    unlink($file);
                }
            }

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }


    private function translateReportType($reportType)
    {

        $translations = [
            'achievement' => 'تقرير الإنجاز',
            'maintenance' => 'تقرير الصيانة',
            'financial' => 'تقرير مالي',
        ];
        return $translations[$reportType] ?? $reportType;
    }



    /**
     * Get the report type ID based on the report type name.
     */
    private function getReportTypeId($reportType)
    {
        // Implement logic to fetch the report type ID from the database
        $reportTypeModel = \App\Models\ReportType::where('name', $reportType)->first();
        return $reportTypeModel ? $reportTypeModel->id : null;
    }


   
    
 
private function convertDocxToPdf($docxPath)
{
    try {
        // Load the DOCX file
        $phpWord = \PhpOffice\PhpWord\IOFactory::load($docxPath);

        // Save as HTML
        $tempHtmlPath = storage_path('temp/' . Str::uuid() . '.html');
        $htmlWriter = new \PhpOffice\PhpWord\Writer\HTML($phpWord);
        $htmlWriter->save($tempHtmlPath);

        // Read the generated HTML content
        $htmlContent = file_get_contents($tempHtmlPath);

        // Get the path to the custom font
        $fontDir = storage_path('fonts/');
        $fontPath = $fontDir . 'majalla.ttf';

        // Ensure the font exists
        if (!file_exists($fontPath)) {
            throw new \Exception("Font file not found at: " . $fontPath);
        }

        // Configure Dompdf options
        $options = new Options();
        $options->set('isHtml5ParserEnabled', true);
        $options->set('isRemoteEnabled', true);
        $options->setDefaultFont('majalla'); // Set the custom font as default
        $options->setFontDir($fontDir);      // Set the font directory
        $options->setFontCache($fontDir);   // Use the same directory for caching

        // Initialize Dompdf
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($htmlContent, 'UTF-8');
        $dompdf->setPaper('A4', 'portrait');

        // Render the PDF
        $dompdf->render();

        // Save the PDF to a temporary file
        $pdfPath = storage_path('temp/' . Str::uuid() . '.pdf');
        file_put_contents($pdfPath, $dompdf->output());

        // Clean up temporary HTML file
        if (file_exists($tempHtmlPath)) {
            unlink($tempHtmlPath);
        }

        return $pdfPath;
    } catch (\Exception $e) {
        // Log errors
        Log::error('Error converting DOCX to PDF:', ['error' => $e->getMessage()]);

        // Clean up temporary HTML file if it exists
        if (isset($tempHtmlPath) && file_exists($tempHtmlPath)) {
            unlink($tempHtmlPath);
        }

        throw new \Exception("Failed to convert DOCX to PDF: " . $e->getMessage());
    }
}
    

private function convertDocxToPdfUsingAPI($docxPath)
{
    try {
        // Read the DOCX file
        $fileContents = file_get_contents($docxPath);
        $fileName = basename($docxPath);

        // Call the Flask API
        $response = Http::attach(
            'file', // The name of the field the API expects
            $fileContents,
            $fileName
        )->post('https://converted-api.onrender.com/convert'); // Replace with the actual Flask API URL

        // Check the response status
        if ($response->failed()) {
            Log::error('Failed to call Flask API', ['response' => $response->body()]);
            throw new \Exception('Failed to convert DOCX to PDF: API error.');
        }

        // Save the PDF content
        $pdfContent = $response->body();
        $pdfPath = storage_path('temp/' . Str::uuid() . '.pdf');
        file_put_contents($pdfPath, $pdfContent);

        return $pdfPath;
    } catch (\Exception $e) {
        Log::error('Error converting DOCX to PDF using Flask API:', ['error' => $e->getMessage()]);
        throw new \Exception('Failed to convert DOCX to PDF: ' . $e->getMessage());
    }
}

  
    /**
     * Convert DOCX to PDF using Pandoc's online API.
     *
     * @param string $docxPath Path to the DOCX file.
     * @return string Path to the generated PDF file.
     * @throws \Exception If the conversion fails.
     */
    private function convertDocxToPdfUsingPandoc($docxPath)
    {
        try {
            // Read the DOCX file and encode it as base64
            $docxContent = file_get_contents($docxPath);
            $base64Content = base64_encode($docxContent);

            // Prepare the request payload
            $payload = [
                'citeproc' => false,
                'embed-resources' => false,
                'files' => (object)[], // Empty object
                'from' => 'docx',
                'highlight-style' => null,
                'html-math-method' => 'plain',
                'number-sections' => false,
                'standalone' => false,
                'table-of-contents' => false,
                'template' => null,
                'text' => $base64Content, // Base64-encoded DOCX content
                'to' => 'pptx', // Convert to PDF
                'wrap' => 'auto',
            ];

            // Send the request to Pandoc's API
            $response = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ])->post('https://pandoc.org/cgi-bin/pandoc-server.cgi', $payload);

            // Check if the request was successful
            if (!$response->successful()) {
                throw new \Exception('Failed to convert DOCX to PDF: ' . $response->body());
            }

            // Decode the base64 response
            $responseData = $response->json();
            if (empty($responseData['output']) || !$responseData['base64']) {
                throw new \Exception('Invalid response from Pandoc API');
            }

            $pdfContent = base64_decode($responseData['output']);

            // Save the PDF file
            $pdfPath = storage_path('temp/' . Str::uuid() . '.pdf');
            file_put_contents($pdfPath, $pdfContent);

            return $pdfPath;
        } catch (\Exception $e) {
            Log::error('Error converting DOCX to PDF using Pandoc:', ['error' => $e->getMessage()]);
            throw new \Exception('Failed to convert DOCX to PDF: ' . $e->getMessage());
        }
    }
}
