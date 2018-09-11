<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');

    $dbConnect = mysqli_connect("localhost","root","autoset");
    mysqli_select_db($dbConnect,'parkcnt');
    $today  = date('d');
    if($today != 1){
        $firstday = date('Y-m');
        $firstday .= '-01';
        $today = date('Y-m-d');
        $query = "select * from parktable where date BETWEEN"." '$firstday'". " AND" . " '$today' " ;
        echo $query;
    }
    $result = mysqli_query($dbConnect,$query);
    if($result === false){
        echo "connect error";
    }else{
    //echo $firstday . '-01'; //. is string + operation
        if(!$result || mysqli_num_rows($result) > 0 ){
            while($row = mysqli_fetch_assoc($result)) {
            echo "<br>대: " . $row["big"]. " md: " . $row["mid"]. "sm: " . $row["small"]. " total: " . $row["total"] . "<br>";
            }
        }
    }
    echo '-------------------' ;
    echo date('d');
?>