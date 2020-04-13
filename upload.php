<?php
    require_once "../config.php";
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Content-Type: application/json; charset=UTF-8');

    $big =$_POST['inBig'];
    $md = $_POST['inMd'];
    $sm = $_POST['inSm'];
    $total =  $_POST['inTotal'];

    $today = date('Ymd');

    $query = $dbConnect->prepare('insert into parktable (total,big,mid,small,date) values (?, ?, ?, ?, ?)');
    $query->bind_param('iiiis', $total, $big, $md, $sm, $today);

    if ($query->execute()) {
        echo 'success';
    } else {
        echo 'upload failed';
    }
    $query->close();
