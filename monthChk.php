<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');

    $dbConnect = mysqli_connect("localhost","root","autoset");
    mysqli_select_db($dbConnect,'parkcnt');
    $today  = date('d');
    if($today != 1){
        $firstday = date('Y-m');
        $firstday+ '-1';
        $today = date('Y-m-d');
        $query = "select * from 'parkcnt' where DATE(date) between '$firstday' AND '$today' " ;
    }
    echo $firstday;
    echo date('d');
?>