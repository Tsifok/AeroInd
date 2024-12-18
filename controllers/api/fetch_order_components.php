<?php

require_once('../../includes/config.php');

if(isset($_SESSION['user'])){  

    $componentsQuery = 'SELECT components_general.*, components_stock.stock, components_stock.unit, orders.id AS order_id
                        FROM components_stock
                        RIGHT JOIN components_general ON components_stock.components_id = components_general.id
                        INNER JOIN orders ON components_general.id = orders.product_id
                        WHERE orders.finished_at IS NULL
                        ORDER BY orders.id';
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