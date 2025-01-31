<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReportMail extends Mailable
{
    use Queueable, SerializesModels;

    public $pdfPath;

    public function __construct($pdfPath)
    {
        $this->pdfPath = $pdfPath;
    }

    public function build()
    {
        return $this->subject('تقريرك PDF')
                    ->view('emails.report')
                    ->attach($this->pdfPath, [
                        'as' => 'report.pdf',
                        'mime' => 'application/pdf',
                    ]);
    }
}
