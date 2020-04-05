<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
    header('Content-Type: application/json; charset=UTF-8');

    $dbConnect = mysqli_connect("localhost","root","autoset");
    mysqli_select_db($dbConnect,'parkcnt');

    $FIRST_DAY = 1;
    $today  = date('d');
    if($today != $FIRST_DAY){
        $firstday = date('Y-m');
        $firstday .= '-01';
        $today = date('Y-m-d');
        $query = $dbConnect->prepare('select * from parktable where date BETWEEN ? AND ? ') ;
        $query -> bind_param('ss',$firstday,$today);
    }
    $result = mysqli_stmt_execute($query);
    if($result === false){
        echo "connect error";
    }else{
        if(!$result || mysqli_num_rows($result) > 0 ){
            while($row = mysqli_fetch_assoc($result)) {
            
            $tmpCnt= array('big'=> $row['big'] ,'md'=> $row['mid'] , 'sm' => $row['small'] , 'total' => $row['total'], 'date' => $row['date'] );
            array_push($carCnt , $tmpCnt);
            }
        echo json_encode($carCnt);
        }
    }