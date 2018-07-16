<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

$dbConnect = mysqli_connect("localhost","root","autoset");
mysqli_select_db($dbConnect,'parkcnt');
$today  = date('Ymd');
$query = 'selct * from parktable where $today ';
?>