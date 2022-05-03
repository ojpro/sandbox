<!doctype html>
<html lang="{{ str_replace($app->getLocale(),'_','-') }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- Styles --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Document</title>
</head>
<body>

{{-- Scripts --}}
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
