<?php

require_once('../../includes/config.php');

if(isset($_SESSION['user'])){  

    $componentsQuery = 'SELECT * FROM components_general ORDER BY comp_name';
    $componentsResult = mysqli_query($conn, $componentsQuery);
    
    if ($componentsResult) {
        $data = [];
        while ($row = mysqli_fetch_assoc($componentsResult)) {
            $data[] = $row;
        }
    
        $message = [
            "message" => "Fetch hecho correctamente",
            "status" => "success",
            "data" => $data
        ];
    } else {
        $message = [
            "message" => "Error al realizar el fetch",
            "status" => "error",
            "data" => null
        ];
    }

    return print_r(json_encode($message));
    
}else{
    header('location: ../web/home.php');
}

