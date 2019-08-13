<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');

$big =$_POST['inBig'];
$md = $_POST['inMd'];
$sm = $_POST['inSm'];
$total =  $_POST['inTotal'];

$dbConnect = mysqli_connect('localhost','root','autoset');
	mysqli_select_db($dbConnect,'parkcnt');
	$today = date('Ymd');
	echo $today;
	$query = "insert into parktable (total,big,mid,small,date) values ($total,$big,$md,$sm, $today)";
	
	$result = mysqli_query($dbConnect,$query); //쿼리실행
	mysqli_close($dbConnect);
?>