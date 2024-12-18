<?php 

require_once('../../includes/config.php');

if(isset($_SESSION['user'])){  

    $message = [
        "message" => ["Error al tratar de registrar orden de componente"],
        "status" => "error"
    ];

    if(isset($_POST) && isset($_POST['flag']) && isset($_POST['comp_order_id'])){
        $flag = $_POST['flag'];
        $comp_id = $_POST['comp_order_id'];
        
        if($flag == 1){

            $addQuery = 'INSERT INTO orders (product_id) 
                    VALUES ("'. mysqli_real_escape_string($conn, $comp_id) .'")';
    
                    if (mysqli_query($conn, $addQuery)) {
                        $message = [
                            "message" => "Componente registrado exitosamente",
                            "status" => "success"
                        ];                    
                    } else {
                        $message['message'][] = "Error al registrar componente: " . mysqli_error($conn);
                    }

        }elseif($flag == 2){            

            mysqli_begin_transaction($conn);

            try {
                // Verificar si el ID existe en components_stock
                $checkQuery1 = "SELECT id FROM components_stock WHERE id = ". $asdf ."";
                $result1 = mysqli_query($conn, $checkQuery1);
                if (mysqli_num_rows($result1) > 0) {
                    // Si el ID existe, realizar un UPDATE
                    $updateQuery1 = "UPDATE table1 SET column1 = 'value1', column2 = 'value2' WHERE id = 'your_id'";
                    if (!mysqli_query($conn, $updateQuery1)) {
                        throw new Exception("Error en la primera actualización: " . mysqli_error($conn));
                    }
                } else {
                    // Si el ID no existe, realizar un INSERT
                    $insertQuery1 = "INSERT INTO table1 (id, column1, column2) VALUES ('your_id', 'value1', 'value2')";
                    if (!mysqli_query($conn, $insertQuery1)) {
                        throw new Exception("Error en la primera inserción: " . mysqli_error($conn));
                    }
                }
            
                // Verificar si el ID existe en table2
                $checkQuery2 = "SELECT id FROM table2 WHERE id = 'your_id'";
                $result2 = mysqli_query($conn, $checkQuery2);
                if (mysqli_num_rows($result2) > 0) {
                    // Si el ID existe, realizar un UPDATE
                    $updateQuery2 = "UPDATE table2 SET column3 = 'value3', column4 = 'value4' WHERE id = 'your_id'";
                    if (!mysqli_query($conn, $updateQuery2)) {
                        throw new Exception("Error en la segunda actualización: " . mysqli_error($conn));
                    }
                } else {
                    // Si el ID no existe, realizar un INSERT
                    $insertQuery2 = "INSERT INTO table2 (id, column3, column4) VALUES ('your_id', 'value3', 'value4')";
                    if (!mysqli_query($conn, $insertQuery2)) {
                        throw new Exception("Error en la segunda inserción: " . mysqli_error($conn));
                    }
                }
            
                // Si ambas operaciones son exitosas, confirmamos la transacción
                mysqli_commit($conn);
                echo "Transacción completada con éxito.";
            } catch (Exception $e) {
                // Si ocurre un error, revertimos la transacción
                mysqli_rollback($conn);
                echo "Transacción fallida: " . $e->getMessage();
            }
            
            // Cerrar conexión
            mysqli_close($conn);


        }else{
            $message['message'][] = "error con la flag";
        }    
    }else{
        $message['message'][] = "Formulario/campo vacio";         
    }

    return print_r(json_encode($message));
}else{
    header('location: ../web/home.php');
}