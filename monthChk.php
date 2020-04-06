<?php
    require_once "../config.php";
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Content-Type: application/json; charset=UTF-8');
    
    $query = $dbConnect->prepare('select * from parktable where date BETWEEN ? AND ? ');
    
    $firstDay = date('Y-m-01');
    $today = date('Y-m-d');

    $query -> bind_param('ss',$firstDay,$today);
    $exec = mysqli_stmt_execute($query);
    if($exec === false){
        echo json_encode("connect error");
    }else{
        $result = mysqli_stmt_get_result($query);
        if(mysqli_num_rows($result) > 0 ){
            $carCnt = array();
            while($row = mysqli_fetch_assoc($result)) {
            $tmpCnt= array('big'=> $row['big'] ,'md'=> $row['mid'] , 'sm' => $row['small'] , 'total' => $row['total'], 'date' => $row['date'] );
            array_push($carCnt , $tmpCnt);
            }
        echo json_encode($carCnt);
        }
    }
    mysqli_close($dbConnect);