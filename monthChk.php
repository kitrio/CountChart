<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Content-Type : application/json');

    $dbConnect = mysqli_connect("localhost","root","autoset");
    mysqli_select_db($dbConnect,'parkcnt');
    $today  = date('d');
    if($today != 1){
        $firstday = date('Y-m');
        $firstday .= '-01';
        $today = date('Y-m-d');
        $query = "select * from parktable where date BETWEEN"." '$firstday'". " AND" . " '$today' " ;
        echo $query;
        $carCnt = array();
    }
    $result = mysqli_query($dbConnect,$query);
    if($result === false){
        echo "connect error";
    }else{
    //echo $firstday . '-01'; //. is string + operation
        if(!$result || mysqli_num_rows($result) > 0 ){
            while($row = mysqli_fetch_assoc($result)) {
            //echo "<br>대: " . $row["big"]. " md: " . $row["mid"]. "sm: " . $row["small"]. " total: " . $row["total"] . "<br>"
            
            $tmpCnt= array('big'=> $row['big'] ,'md'=> $row['mid'] , 'sm' => $row['small'] , 'total' => $row['total'] );
            array_push($carCnt , $tmpCnt);
            }
            print_r( $carCnt); 
        echo json_encode($carCnt);
        }
    }
?>