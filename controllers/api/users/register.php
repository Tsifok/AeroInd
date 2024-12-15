<?php

$message = [
    "message" => ["Error al registrar usuario:"],
    "status" => "error"
];

if(!empty($_POST)) {
    require_once('../../../includes/config.php');

    if($_SESSION['user']['rol_id'] == 2){    

        $checknum = 0;
        $checksum = 9;

        $dni = $_POST['dni'];
        $name = $_POST['name'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $rol = $_POST['rol'];
        $birthdate = $_POST['birthdate'];

        //----------------- Validaciones del DNI
        if (!preg_match('/^[0-9]{8}$/', $dni)) {
            $message['message'][] = "Error: El DNI debe tener 8 dígitos numéricos";
        } else {
            $checknum++;
        }

        $checkRoleQuery = "SELECT dni FROM users WHERE dni = '" . mysqli_real_escape_string($conn, $dni) . "'";
        $checkRoleResult = mysqli_query($conn, $checkRoleQuery);
        if(!$checkRoleResult){
            $message['message'][] = "Error al verificar DNI existente: " . mysqli_error($conn);
        }
        if (mysqli_num_rows($checkRoleResult) !== 0) {
            $message['message'][] = "Error: El DNI especificado ya existe";
        }else{
            $checknum++;
        }

        //----------------- Validaciones del nombre
        if (empty($name) || !preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/', $name)) {
            $message['message'][] = "Error: El nombre solo puede contener letras y espacios";
        } else {
            $checknum++;
        }

        //----------------- Validaciones del apellido
        if (empty($lastname) || !preg_match('/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/', $lastname)) {
            $message['message'][] = "Error: El apellido solo puede contener letras y espacios";
        } else {
            $checknum++;
        }

        //----------------- Validaciones del correo electrónico
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $message['message'][] = "Error: Formato de correo electrónico inválido";
        } else {
            $checknum++;
        }

        $checkRoleQuery = "SELECT email FROM users WHERE email = '" . mysqli_real_escape_string($conn, $email) . "'";
        $checkRoleResult = mysqli_query($conn, $checkRoleQuery);
        if(!$checkRoleResult){
            $message['message'][] = "Error al verificar Email existente: " . mysqli_error($conn);
        }
        if (mysqli_num_rows($checkRoleResult) != 0) {
            $message['message'][] = "Error: El Email especificado ya existe";
        }else{
            $checknum++;
        }

        //----------------- Validaciones del rol
        if (!in_array($rol, ['gerente', 'empleado'])) { // Ajusta los valores válidos según tu base de datos
            $message['message'][] = "Error: Rol inválido";
        } else {
            $checknum++;
        }

        $checkRoleQuery = "SELECT id FROM roles WHERE name = '" . mysqli_real_escape_string($conn, $rol) . "'";
        $checkRoleResult = mysqli_query($conn, $checkRoleQuery);
        if(!$checkRoleResult){
            $message['message'][] = "Error al verificar rol: " . mysqli_error($conn);
        }

        if (mysqli_num_rows($checkRoleResult) === 0) {
            $message['message'][] = "Error: El rol especificado no existe";
        }else{
            $checknum++;
        }

        //----------------- Validaciones de la fecha de nacimiento
        $birthdate_format = DateTime::createFromFormat('Y-m-d', $birthdate);
        if (!$birthdate_format || $birthdate_format->format(format: 'Y-m-d') !== $birthdate) {
            $message['message'][] = "Error: Formato de fecha de nacimiento inválido. Use YYYY-MM-DD";
        } else {
            $checknum++;
        }    

        //----------------- Verifica si todas las validaciones pasaron
        if ($checknum == $checksum) {
            
            $password = generateRandomPass();
            $hashedPass = sha1($password);

            $mailMessage = "En hora buena $name $lastname, usted ahora es un empleado en GurbarrySA. Esta a continuacion es su contraseña: $password   Por favor no comparta ni elimine este Mail, el cual podria ser de utilidad en el futuro";

            $resultMail = sendMail($email,$mailMessage);            
            if($resultMail){
                
                $sqlRegister = "INSERT INTO users (dni, name, lastname, password, email, rol_id, birthdate, created_at) 
                VALUES ('" . mysqli_real_escape_string($conn, $dni) . "', 
                        '" . mysqli_real_escape_string($conn, $name) . "', 
                        '" . mysqli_real_escape_string($conn, $lastname) . "', 
                        '" . $hashedPass . "', 
                        '" . mysqli_real_escape_string($conn, $email) . "', 
                        (SELECT id FROM roles WHERE name = '" . mysqli_real_escape_string($conn, $rol) . "'), 
                        '" . mysqli_real_escape_string($conn, $birthdate) . "', 
                        NOW())";


                if (mysqli_query($conn, $sqlRegister)) {
                    $message = [
                        "message" => "Usuario registrado exitosamente",
                        "status" => "success"
                    ];                    
                } else {
                    $message['message'][] = "Error al registrar usuario: " . mysqli_error($conn);
                }

            }else {
                $message['message'][] = "Error al registrar usuario (Email) : " . mysqli_error($conn);
            } 

        }
    }else{
        $message['message'][] = "Tu no deberias estar aqui:";    
    }
}else{
    $message['message'][] = "No se puede enviar el formulrio vacio: ";
}

header("Content-Type: application/json; charset=utf-8");
return print_r(json_encode($message));

//Genera contraseña del usuario
function generateRandomPass($length = 12) {
    
    //Limites del tamaño de la pass a utilizar
    $minLength = 5;
    $maxLength = 9;
    
    //Se elige un numero dentro del rango
    $length = random_int($minLength, $maxLength);

    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*<>?';
    
    $charactersArray = str_split($characters);
    shuffle($charactersArray);
    return implode('', array_slice($charactersArray, 0, $length));
}