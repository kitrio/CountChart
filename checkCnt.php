<?php
require_once "../config.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

$today  = date('Y-m-d');
$query = $dbConnect ->prepare("select * from parktable where  date = ? ");
$query -> bind_param('s', $today);
$exec = mysqli_stmt_execute($query);
if($exec === false){
        echo "connect error";
} else{
    $result = mysqli_stmt_get_result($query);
        if(mysqli_num_rows($result) > 0 ){// num_rows 는 fasle 시 error 발생
        while($row = mysqli_fetch_assoc($result)) {
        echo "<br>대: " . $row['big']. " md: " . $row['mid']. "sm: " . $row['small']. " total: " . $row['total'] . "<br>";
        }
    }
}
mysqli_close($dbConnect);
