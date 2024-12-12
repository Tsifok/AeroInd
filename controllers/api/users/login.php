<?php

if(!isset($_SESSION['user'])){
    if (!empty($_POST)) {
    
        require_once('../../../includes/config.php');

        $message = [
            "message" => ["Error al iniciar sesión"],
            "status" => "error"
        ];
        
        $checknum = 0;
        $checksum = 2;

        $password = $_POST['password'];

//----------------- Verificaciones del correo electrónico
        if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $message['message'][] = "Error: Formato de correo electrónico inválido";        
        }else{
            $checknum++;
        }

//----------------- Verificaciones de la contraseña
        if (preg_match('/[";]+/', $password)) {
            $message['message'][] = "Error: La contraseña no puede contener comillas o punto y coma";        
        }else{
            $checknum++;
        }

//----------------- Busca e inicia la sesion
        if($checknum == $checksum){
            $sqlLogin = "SELECT * FROM users WHERE email='" . trim($_POST['email']) . "' AND deleted_at IS NULL";
            $resultLogin = mysqli_query($conn, $sqlLogin);

            if (mysqli_num_rows($resultLogin) === 1) {
                $sqlLogin = "SELECT users.* FROM users WHERE users.email = '" . trim($_POST['email']) . "' AND users.password = '" . sha1($password) . "' AND users.deleted_at IS NULL";
                $resultLogin = mysqli_query($conn, $sqlLogin);

                if (mysqli_num_rows($resultLogin) === 1) {
                    $dataLogin = mysqli_fetch_assoc($resultLogin);
                    $_SESSION['user'] = $dataLogin;

                    $message['message'] = "Se ha iniciado sesión correctamente";
                    $message['status'] = "success";
                } else {
                    $message['message'] = "Error, contraseña incorrecta";
                }
            } else {
                $message['message'] = "Error, el usuario no existe o fue eliminado";
            }
        }

        header("Content-Type: application/json; charset=utf-8");
        return print_r(json_encode($message));

    }
}else{
    header('location: ../web/home.php');
}