<?php
date_default_timezone_set('America/Argentina/Buenos_Aires');

$conn = mysqli_connect('localhost', 'root', '', 'garry');
if (!$conn) {
  die('Error de Conexión (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
}

session_start();

mysqli_set_charset($conn, "utf8");


function sendMail($to, $message,): bool{
  
  $subject = "GurbarrySA";  
  
  // Encabezados
  $headers = "From: No reply <no-reply@example.com>\r\n";
  $headers .= "Reply-To: no-reply@example.com\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  if (mail($to, $subject, $message, $headers)) {
    return True;
  } else {  
      return False;
  }

}