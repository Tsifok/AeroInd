<?php

require_once('../../includes/config.php');

if(isset($_SESSION['user'])){  

    $message = [
        "message" => ["Error al tratar de registrar componente"],
        "status" => "error"
    ];

    if(isset($_POST) && isset($_POST['comp_name_selector'])){
        $component = $_POST['comp_name_selector'];
        if(isset($_POST['add_comp_specification'])){
            $specification = $_POST['add_comp_specification'];

            switch($component){
                case "Envase":                    
                    $label = $_POST['add_comp_label'];                

                    $addQuery = 'INSERT INTO components_general (comp_name, comp_specification, label) 
                    VALUES (
                    "'. mysqli_real_escape_string($conn, $component) .'" , 
                    "'. mysqli_real_escape_string($conn, $specification) .'" , 
                    "'. mysqli_real_escape_string($conn, $label) .'")';
    
                    if (mysqli_query($conn, $addQuery)) {
                        $message = [
                            "message" => "Componente registrado exitosamente",
                            "status" => "success"
                        ];                    
                    } else {
                        $message['message'][] = "Error al registrar componente: " . mysqli_error($conn);
                    }

                    break;

                case "Pulsador":                        
                    $color = $_POST['comp_color'];                                                    

                    $addQuery = 'INSERT INTO components_general (comp_name, comp_specification, comp_color) 
                    VALUES (
                    "'. mysqli_real_escape_string($conn, $component) .'" , 
                    "'. mysqli_real_escape_string($conn, $specification) .'" , 
                    "'. mysqli_real_escape_string($conn, $color) .'")';
    
                    if (mysqli_query($conn, $addQuery)) {
                        $message = [
                            "message" => "Componente registrado exitosamente",
                            "status" => "success"
                        ];                    
                    } else {
                        $message['message'][] = "Error al registrar componente: " . mysqli_error($conn);
                    }

                    break;

                case "Concentrado":
                    $name = $_POST['add_comp_name'];                
                    $kind = $_POST['add_comp_kind'];                
    
                    $addQuery = 'INSERT INTO components_general (comp_name, comp_specification, kind) 
                    VALUES (
                    "'. mysqli_real_escape_string($conn, $name) .'" , 
                    "'. mysqli_real_escape_string($conn, $specification) .'" , 
                    "'. mysqli_real_escape_string($conn, $kind) .'")';
    
                    if (mysqli_query($conn, $addQuery)) {
                        $message = [
                            "message" => "Componente registrado exitosamente",
                            "status" => "success"
                        ];                    
                    } else {
                        $message['message'][] = "Error al registrar componente: " . mysqli_error($conn);
                    }

                    break;

                case "Otro":
                    $name = $_POST['add_comp_name'];
        
                    $addQuery = 'INSERT INTO components_general (comp_name, comp_specification) 
                    VALUES (
                    "'. mysqli_real_escape_string($conn, $name) .'" , 
                    "'. mysqli_real_escape_string($conn, $specification) .'")';
    
                    if (mysqli_query($conn, $addQuery)) {
                        $message = [
                            "message" => "Componente registrado exitosamente",
                            "status" => "success"
                        ];                    
                    } else {
                        $message['message'][] = "Error al registrar componente: " . mysqli_error($conn);
                    }
                    
                    break;
            }
        }else{
            $message['message'][] = "Formulario/campo vacio (add_comp_specification)";
        }                
    }else{
        $message['message'][] = "Formulario/campo vacio";                
    }
}else{
    header('location: ../web/home.php');
}

return print_r(json_encode($message));