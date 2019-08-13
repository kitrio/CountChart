<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

$dbConnect = mysqli_connect('localhost','root','autoset');
mysqli_select_db($dbConnect,'parkcnt');
$today  = date('Y-m-d');
echo $today;
$query = "select * from parktable where  date = '$today' ";
$result = mysqli_query($dbConnect,$query);
//if($result-> num_rows > 0){
    // while ($row = mysqli_fetch_assoc($result)){
    //     echo $row;
    // }
//}
//if(!$result || mysqli_num_rows($result) == 0 ){// num_rows 는 fasle 시 error 발생
    if(!$result || mysqli_num_rows($result) > 0 ){// num_rows 는 fasle 시 error 발생
    while($row = mysqli_fetch_assoc($result)) {
    echo "<br>대: " . $row['big']. " md: " . $row['mid']. "sm: " . $row['small']. " total: " . $row['total'] . "<br>";
    }
}
mysqli_close($dbConnect);
?>