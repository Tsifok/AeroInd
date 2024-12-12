<!DOCTYPE html>
<html lang="es" data-theme="light">

<head>
  <title><?php echo $page; ?> • GurbarrySA</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="author" content="Viex Inc.">

  <link rel="icon" sizes="192x192" href="../../images/Logo Fooder icono.png">
  <link href="../../css/style_layout.css" rel="stylesheet">

  <script src="https://kit.fontawesome.com/770a68900d.js" crossorigin="anonymous"></script>

  <!-- FONTS -->
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
  <!-- BOOTSTRAP -->
  <script src="../../js/bootstrap.bundle.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
  <!-- JQUERY -->
  <script src="../../js/jquery.min.js"></script>

</head>

<body>
  <!-- Empieza el contenido especifico -->
  <div class="container ">
    <?php require_once($section . ".php") ?>
  </div>
  <!-- Termina el contenido especifico -->

  
</body>

</html>