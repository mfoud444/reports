<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تقريرك</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            direction: rtl;
            text-align: right;
            background-color: #f8f9fa;
            padding: 20px;
        }
        .container {
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: auto;
            text-align: center;
        }
        .logo {
            max-width: 150px;
            margin-bottom: 20px;
        }
        h1 {
            color: #007bff;
        }
        p {
            font-size: 18px;
            color: #333;
            text-align: right;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        {{-- <img src="{{ asset('images/logo.png') }}" alt="شعار الشركة" class="logo"> --}}
        <h1>مرحبًا بك!</h1>
        <p>نأمل أن تكون بخير.</p>
        <p>يرجى العثور على التقرير المطلوب مرفقًا بهذه الرسالة.</p>
        <p>إذا كنت بحاجة إلى أي مساعدة، لا تتردد في التواصل معنا.</p>
        <div class="footer">
            <p>مع أطيب التحيات،</p>
            <p><strong>{{ config('app.name') }}</strong></p>
        </div>
    </div>
</body>
</html>
