<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sertifikat {{ $grade->category->name }} - {{ $grade->user->name }}</title>
</head>
<style>
    html,
    body {
        width: 100vw;
        height: 100vh;
    }

    body {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }

    @font-face {
        font-family: "Arial";
        src: url("{{ storage_path('fonts/lobster.ttf')}}") format("truetype");
    }

    .inbackground {
        top:25%;
        border:1px solid navy;
        height:700px;
    }

    .certificate_name {
        color: #332B28;
        font-family: "Arial";
        font-size: 2.5rem;
        margin-top:26%;
        line-height: 1.1;
    }
    
    .archived_name {
        line-height: 1.0;
    }
    
    td{
        font-size: 15px;
        line-height: 0.8;
    }
</style>

<body>
    <div style="position:fixed;left: 0px; right: 0px; bottom: 0px; text-align: center;z-index: -1000;">
        @foreach($grade->gradeDetail as $gradeDetail)
        @if ($gradeDetail->grade <= 542 )
        <img src="{{ env('APP_URL') }}/assets/certificate/toefl_silver.jpg" style="width: 100%;height: 100%;">
        @elseif ($gradeDetail->grade >= 543 || $gradeDetail->grade <=626)
        <img src="{{ env('APP_URL') }}/assets/certificate/toefl_bronze.jpg" style="width: 100%;height: 100%;">
        @else
        <img src="{{ env('APP_URL') }}/assets/certificate/toefl_gold.jpg" style="width: 100%;height: 100%;">
        @endif
        @endforeach
    </div>
    <div class="inbackground">
        <h2><br />
            <p class="certificate_name" align="center">
                {{ $grade->user->name }}
            </p>
        </h2>
        <h3 align="center" align="center" style="margin-top:-40px;">Achieved the following scores on the</h3>
        <h2 align="center" class="archived_name" style="margin-top:-10px"><i>{{ $grade->exam->title}}</i></h2>
        <table align="center">
            @foreach($grade->gradeDetail as $gradeDetail)
                <tr>
                    <td>{{ $gradeDetail->valueCategory->name }}</td>
                    <td width="20px" align="center">:</td>
                    <td>{{ $gradeDetail->grade }}</td>
                </tr>
            @endforeach
            <tr>
                <td>Total Score</td>
                <td align="center">:</td>
                <th><bold>{{ $grade->grade }}</bold></th>
            </tr>
        </table>
        <p style="margin-left: 120px; margin-top: 30px"><strong>Under the auspices of: <br />English Booster</strong>
        <br />Jl. Asparaga no 82 Pare Kediri 64212
            <br />Test Date : {{ $grade->end_time }}
            <br />At : https://englishboosterofficial.com
        </p>

    </div>
</body>

</html>
